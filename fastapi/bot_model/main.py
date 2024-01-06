from fastapi import FastAPI, Request
from dotenv import load_dotenv
from bot_model.chatbotHelper import gpt3_logs,main
import os

load_dotenv(dotenv_path="../server/.env")
secret_key_from_env = os.getenv("SECRET_KEY")

async def bot_response(message: str, request: Request):
    print("1")
    chat_log = request.session.get('chat_log')
    print("2")
    if(chat_log == None):
        print("3")
        request.session['chat_log'] = gpt3_logs('', '', chat_log)
        print("4")
        chat_log = request.session.get('chat_log')
        print("5")
    response =  main(message,chat_log)
    print("6")
    if(len(response)!=0):
        print("7")
        request.session['chat_log'] = gpt3_logs(message, response, chat_log)
        print("8")
        return response
    else: 
        print("9")
        return "Oops! Something went wrong"