from pydantic import BaseModel

class SurveyInput(BaseModel):
    A1_Score : float
    A2_Score : float
    A3_Score : float
    A4_Score : float
    A5_Score : float
    A6_Score : float
    A7_Score : float
    A8_Score : float
    A9_Score : float
    A10_Score : float
    gender_f : float
    gender_m : float