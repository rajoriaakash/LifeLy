import numpy as np

import joblib

from fastapi import FastAPI, Request
from surveyinput import SurveyInput
from starlette.middleware.sessions import SessionMiddleware
import uvicorn
from typing import Optional
import pandas as pd
import json
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from prediction_backend.autism_model.chatbotHelper import gpt3_logs,main
import os


lr_model = joblib.load('lrfs.pkl')
lr_columns = joblib.load('lr_columns.pkl')

origins=["*"]
app = FastAPI()
load_dotenv(".env")
# secret_key_from_env = os.getenv("SECRET_KEY")
secret_key_from_env = "12345678123456781234567812345678"


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
app.add_middleware(SessionMiddleware, secret_key=secret_key_from_env)


@app.get("/")
def read_root():
    return {"Topic": "LifeLy Model"}


@app.post("/predict/autism")
async def predict_autism(data : SurveyInput):
    
    print("HERE HERE", data)
    data = data.dict()

    features = np.array(list(data.values()))
    prediction = lr_model.predict_proba([features])[0]

    print("HERE HERE", features, prediction)

    return {"columns": lr_columns, "data": list(map(str, features)), "prediction": str(prediction)}

df = pd.read_csv('../doctors_api/doctors.csv', encoding='ISO-8859-1')
print(df.shape)

@app.get("/recommend/doctors")
async def get_doctors(state: Optional[str] = None, disease: Optional[str] = None):
    # Filter data based on state and disease
    filtered_df = df
    if state:
        filtered_df = filtered_df[filtered_df['State'] == state]
    if disease:
        filtered_df = filtered_df[filtered_df['Speciality'] == disease]

    # Sort the filtered DataFrame by rating
    sorted_df = filtered_df.sort_values(by='Rating', ascending=False)

    # Convert the sorted DataFrame to a JSON string
    json_str = sorted_df.to_dict(orient='records')

    # Return the JSON response
    return json_str

#for chatbot
@app.get("/api/response")
async def get_response(message: str, request: Request):
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

#  Run the API with uvicorn
#    Will run on http://127.0.0.1:8000
if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)