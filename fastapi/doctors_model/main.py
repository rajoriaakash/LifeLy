from typing import Optional
import pandas as pd


df = pd.read_csv('doctors_model/doctors.csv', encoding='ISO-8859-1')

async def get_json_from_csv(state: Optional[str] = None, disease: Optional[str] = None):
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