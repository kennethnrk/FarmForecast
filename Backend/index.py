from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import pandas as pd
import numpy as np
import gc
from fastapi.middleware.cors import CORSMiddleware
from constants import SeasonList
from constants import CropList

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# test
# 90,42,43,20.879744,82.002744,6.502985,202.935536,rice
# West Bengal,Winter,Rice,270270.0,731799.0
# {
#   "recommendation": {
#     "N": 90,
#     "P": 42,
#     "K": 43,
#     "temperature": 20.8,
#     "humidity": 82,
#     "ph": 6.5,
#     "rainfall": 203
#   },
#   "yieldData": {
#     "State_Name": "West Bengal",
#     "Season": "Winter     ",
#     "Area": 270270.0
#   }
# }

class Recommendation(BaseModel):
    N: float
    P: float
    K: float
    temperature: float
    humidity: float
    ph: float
    rainfall: float


class YieldD(BaseModel):
    State_Name: str
    Season: str
    Area: int


class PredictionData(BaseModel):
    recommendation: Recommendation
    yieldData: YieldD


@app.get("/")
async def index():
    return {"message": "Hello World"}


# @app.post("/recommend")
# async def recommend(pr_data: PredictionData):
#     rfc = joblib.load('../RandomForestCropRecommendation.pkl')
#     scaler = joblib.load('../reco_scaler.pkl')
#     le = joblib.load("../LabelEnc.pkl")
#     ohe = joblib.load('../YieldOneHot.pkl')
#     yield_scaler = joblib.load('../yield_scaler.pkl')
#     RFYC = joblib.load('../RandomForestYieldPrediction.pkl')
#
#     reco = pr_data.recommendation
#     yield_d = pr_data.yieldData
#     reco_to_predict = [[
#         reco.N,
#         reco.P,
#         reco.K,
#         reco.temperature,
#         reco.humidity,
#         reco.ph,
#         reco.rainfall,
#     ]]
#     reco_to_predict = scaler.transform(reco_to_predict)
#     reco_output = rfc.predict(reco_to_predict)
#     reco_output = le.inverse_transform(reco_output)
#
#     yield_area = yield_d.Area
#     yield_to_predict = {'Season': [yield_d.Season], 'Crop': reco_output, 'State_Name': [yield_d.State_Name]}
#
#     yield_to_predict = pd.DataFrame.from_dict(yield_to_predict)
#
#     yield_to_predict = ohe.transform(yield_to_predict[["Season", "Crop", "State_Name"]])
#     yield_to_predict = np.hstack((yield_to_predict, [[yield_area]]))
#     yield_to_predict = yield_scaler.transform(yield_to_predict)
#     opt = RFYC.predict(yield_to_predict)
#
#     del rfc
#     del scaler
#     del le
#     del ohe
#     del yield_scaler
#     del RFYC
#     gc.collect()
#
#     return {'success': True, 'data': {'recommendation': reco_output[0], 'yield_d': opt[0]}}


@app.post("/recommend")
async def recommend(pr_data: PredictionData):
    rfc = joblib.load('../RandomForestCropRecommendation.pkl')
    scaler = joblib.load('../reco_scaler.pkl')
    le = joblib.load("../LabelEnc.pkl")
    ohe = joblib.load('../YieldOneHot.pkl')
    yield_scaler = joblib.load('../yield_scaler.pkl')
    RFYC = joblib.load('../RandomForestYieldPrediction.pkl')

    def predictYield(y_to_p):
        y_to_p = pd.DataFrame.from_dict(y_to_p)

        y_to_p = ohe.transform(y_to_p[["Season", "Crop", "State_Name"]])
        y_to_p = np.hstack((y_to_p, [[yield_area]]))
        y_to_p = yield_scaler.transform(y_to_p)
        return RFYC.predict(y_to_p)[0]

    reco = pr_data.recommendation
    yield_d = pr_data.yieldData
    reco_to_predict = [[
        reco.N,
        reco.P,
        reco.K,
        reco.temperature,
        reco.humidity,
        reco.ph,
        reco.rainfall,
    ]]
    reco_to_predict = scaler.transform(reco_to_predict)
    reco_output = rfc.predict(reco_to_predict)
    reco_output = le.inverse_transform(reco_output)

    yield_area = yield_d.Area

    yield_to_predict = {'Season': [yield_d.Season], 'Crop': reco_output, 'State_Name': [yield_d.State_Name]}

    opt = predictYield(yield_to_predict)

    season_predict = dict()

    for item in SeasonList:
        yield_to_predict = {'Season': [item], 'Crop': reco_output, 'State_Name': [yield_d.State_Name]}

        season_predict[item] = predictYield(yield_to_predict)

    cinx = CropList.index(reco_output[0])

    alternative_crops = {reco_output[0]: opt}
    for i in range(cinx + 1, cinx + 6):
        yield_to_predict = {'Season': [yield_d.Season], 'Crop': CropList[i], 'State_Name': [yield_d.State_Name]}

        al_opt = predictYield(yield_to_predict)
        alternative_crops[CropList[i]] = al_opt

    del rfc
    del scaler
    del le
    del ohe
    del yield_scaler
    del RFYC
    gc.collect()
    print('here')
    return {'success': True, 'data': {'recommendation': reco_output[0], 'yield_d': opt, 'Seasonal': season_predict,
                                      'Alternative': alternative_crops}}
