import numpy as np

import joblib

from autism_model.surveyinput import SurveyInput


import os

# # Get the directory of the current script
# current_directory = os.path.dirname(os.path.abspath(__file__))

# # Construct the absolute path to lrfs.pkl
# model = os.path.join(current_directory, 'lrfs.pkl')

# Load the model using the absolute path
lr_model = joblib.load("autism_model/lrfs.pkl")
lr_columns = joblib.load("autism_model/lr_columns.pkl")

async def get_percent(data : SurveyInput):
    
    print("HERE HERE", data)
    data = data.dict()

    features = np.array(list(data.values()))
    prediction = lr_model.predict_proba([features])[0]

    print("HERE HERE", features, prediction)

    return {"columns": lr_columns, "data": list(map(str, features)), "prediction": str(prediction)}