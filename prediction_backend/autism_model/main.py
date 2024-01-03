import numpy as np

import joblib

from fastapi import FastAPI
from surveyinput import SurveyInput
import uvicorn
from typing import Optional
import pandas as pd
import json
from fastapi.middleware.cors import CORSMiddleware

lr_model = joblib.load('lrfs.pkl')
lr_columns = joblib.load('lr_columns.pkl')

origins=["*"]
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Topic": "Autism Model"}


@app.post("/predict/autism")
async def predict_autism(data : SurveyInput):
    
    print("HERE HERE", data)
    data = data.dict()

    features = np.array(list(data.values()))
    prediction = lr_model.predict_proba([features])[0]

    print("HERE HERE", features, prediction)

    return {"columns": lr_columns, "data": list(map(str, features)), "prediction": str(prediction)}

# @app.get("/recommend/doctors")
# async def get_data(state: str, speciality: str) -> List[dict]:
#     # Load data from CSV file
#     with open('../doctors_api/doctors.csv') as f:
#         reader = csv.DictReader(f)
#         data = [row for row in reader]
    
#     # Filter data based on state and disease
#     filtered_data = [row for row in data if row['State'] == state and row['Speciality'] == speciality]
    
#     # Sort data by rating
#     sorted_data = sorted(filtered_data, key=lambda x: float(x['Rating']), reverse=True)
    
#     return sorted_data

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

#  Run the API with uvicorn
#    Will run on http://127.0.0.1:8000
if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)