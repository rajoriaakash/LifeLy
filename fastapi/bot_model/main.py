from fastapi import FastAPI, Request
from dotenv import load_dotenv
from bot_model.chatbotHelper import gpt3_logs,main
import os

load_dotenv(dotenv_path="../server/.env")
secret_key_from_env = os.getenv("SECRET_KEY")

async def bot_response(message: str, request: Request):
    chat_log = request.session.get('chat_log')
    if(chat_log == None):
        request.session['chat_log'] = gpt3_logs('', '', chat_log)
        chat_log = request.session.get('chat_log')
    response =  main(message,chat_log)
    if(len(response)!=0):
        request.session['chat_log'] = gpt3_logs(message, response, chat_log)
        return response
    else: 
        return "Oops! Something went wrong"