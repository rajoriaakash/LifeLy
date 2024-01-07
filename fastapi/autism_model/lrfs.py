import numpy as np
import pandas as pd
from time import time
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

#url='https://drive.google.com/file/d/1Ut1beSM8oaeUk8ybdBnAQW-0ZCQGoVsJ/view?usp=sharing'
#url='https://drive.google.com/uc?id=' + url.split('/')[-2]
df = pd.read_csv('C:/Users/Akash/Downloads/autismdata/autism_screening.csv')
df.dropna(inplace=True)
df_raw = df['Class/ASD']
features_raw = df[['gender',
                      'A1_Score','A2_Score','A3_Score','A4_Score','A5_Score','A6_Score','A7_Score','A8_Score',
                      'A9_Score','A10_Score']]
# scaler = MinMaxScaler()
# num = ['result']
# features_minmax_transform = pd.DataFrame(data = features_raw)
# features_minmax_transform[num] = scaler.fit_transform(features_raw[num])
features_final = pd.get_dummies(features_raw)

data_classes = df_raw.apply(lambda x : 1 if x == 'YES' else 0)

np.random.seed(123)
X_train, X_test, y_train, y_test = train_test_split(features_final,data_classes,test_size=0.2, random_state=1)

lr_model = LogisticRegression()
lr_model.fit(X_train.values, y_train)

#Serialize the model and save
import joblib
joblib.dump(lr_model, 'lrfs.pkl')
print("LR Model Saved")
#Load the model
lr_model = joblib.load('lrfs.pkl')
# Save features from training
lr_columns = list(X_train.columns)
joblib.dump(lr_columns, 'lr_columns.pkl')
print("LR Model Colums Saved")