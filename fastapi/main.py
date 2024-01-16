import numpy as np
from fastapi import FastAPI, Request
from autism_model.surveyinput import SurveyInput
import uvicorn
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware
from autism_model.main import get_percent
from bot_model.main import bot_response
from doctors_model.main import get_json_from_csv
from starlette.middleware.sessions import SessionMiddleware
from dotenv import load_dotenv
import os
origins=["*"]
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

load_dotenv(dotenv_path="../server/.env")
secret_key_from_env = os.getenv("SECRET_KEY")

app.add_middleware(
    SessionMiddleware,
    secret_key = secret_key_from_env
)

@app.get("/")
def read_root():
    return {"Topic": "LifeLy Model"}

#get autism percentage
@app.post("/predict/autism")
async def predict_autism(data : SurveyInput):
    return await get_percent(data=data)

#for doctors list
@app.get("/recommend/doctors")
async def get_doctors(state: Optional[str] = None, disease: Optional[str] = None):
    return await get_json_from_csv(state=state,disease=disease)

#for chatbot
@app.get("/bot/response")
async def get_response(message: str, request: Request):
    print("inside 1st")
    return await bot_response(message=message, request=request)

#  Run the API with uvicorn
#    Will run on http://127.0.0.1:8000
if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)