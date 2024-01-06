import openai
from dotenv import load_dotenv
import os 
import sys
from langchain.chains import ConversationalRetrievalChain, RetrievalQA
from langchain.chat_models import ChatOpenAI
from langchain.document_loaders import DirectoryLoader, TextLoader
from langchain.embeddings import OpenAIEmbeddings
from langchain.indexes import VectorstoreIndexCreator
from langchain.indexes.vectorstore import VectorStoreIndexWrapper
from langchain.llms import OpenAI
from langchain.vectorstores import Chroma
from langchain.memory import ConversationBufferMemory
from langchain.prompts import  PromptTemplate
from langchain.chains.question_answering import load_qa_chain


load_dotenv(dotenv_path="../server/.env")
openai.api_key = os.getenv("OPENAI_API_KEY")

PERSIST = False
query = None
llm = ChatOpenAI()


def read_file(file):
    content = ""
    f = open(file, 'r')
    Lines = f.readlines()
    for line in Lines:
        content = content + " " + line.strip()
    return content

file_path = "bot_model\datas\data.txt"
SYSTEM_PROMPT = read_file(file_path)
restart_sequence = "\n\nUser:"
start_sequence = "\nLifely-Bot:"


if len(sys.argv) > 1:
  query = sys.argv[1]

if PERSIST and os.path.exists("persist"):
  print("Reusing index...\n")
  vectorstore = Chroma(persist_directory="persist", embedding_function=OpenAIEmbeddings())
  index = VectorStoreIndexWrapper(vectorstore=vectorstore)
else:
  #loader = TextLoader("data/data.txt") # Use this line if you only need data.txt
  loader = DirectoryLoader("bot_model/datas/")
  if PERSIST:
    index = VectorstoreIndexCreator(vectorstore_kwargs={"persist_directory":"persist"}).from_loaders([loader])
  else:
    index = VectorstoreIndexCreator().from_loaders([loader])


def gpt3_logs(question, answer, chat_log=None):
    if chat_log is None:
        chat_log = SYSTEM_PROMPT
    return f'{chat_log}{restart_sequence} {question}{start_sequence}{answer}'


def generate_prompt(prompt: str, system_prompt: str = "") -> str:
    return f"""
[INST] <<SYS>>
{system_prompt}
<</SYS>>

{prompt} [/INST]
""".strip()


def get_conversation_chain(_vectorstore):
    llm = ChatOpenAI()
    template = generate_prompt(
        """
        
        Context: {context}
        Chat History: {chat_history}
        Question: {question}
        Response:
        """,
        system_prompt=SYSTEM_PROMPT,
    )
    prompt = PromptTemplate(template=template, input_variables=["context", "question","chat_history"])

    memory = ConversationBufferMemory(
        memory_key="chat_history",
        human_prefix="Question",
        ai_prefix="Response",
        input_key="question",
        k=50,
        return_messages=True,
        output_key='answer'
    )

    chain = load_qa_chain(
        llm, chain_type="stuff", prompt=prompt, memory=memory, verbose=True
    )
    qa_chain = ConversationalRetrievalChain.from_llm(
        llm,
        chain_type="stuff",
        retriever=_vectorstore,
        memory=memory,
        combine_docs_chain_kwargs={"prompt": prompt},
        return_source_documents=True,
        verbose=True,
    )
    return qa_chain


chat_history = []

chain=get_conversation_chain(index.vectorstore.as_retriever(search_kwargs={"k": 3}))

def main(msg,chat):
    result = chain({"question": msg, "chat_history": chat})
    print(result['chat_history'])
    chat_history.append((msg, result['answer']))
    return result['answer']

if __name__ == "__main__":
    ans = main("What is your name",chat=None)

