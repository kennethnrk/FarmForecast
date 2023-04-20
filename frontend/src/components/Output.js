import Chart from 'chart.js/auto';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { performRecoPred, performPredOnly } from "../APIcalls/calls";
import Navbar from "./navbar";
import { BarChart, LineChart } from "../subcomponents/Charts";
import rice from '../assets/OutputPics/rice.jpg'
import { Col, Row } from "react-bootstrap";

function Output(props) {

    const navigate = useNavigate()

    const {state} = useLocation();

    const [recommendation, setRecommendation] =  useState("")
    const [yield_d, setYield_d] =  useState(0)
    const [loading, setLoading] =  useState(true)
    const [onlyPred, setOnlyPred] =  useState(false)
    const [seasonal, setSeasonal] = useState({})
    const [alternative, setAlternative] = useState({})

    useEffect(()=>
    {
        if(state?.payload){
            if(state?.predictOnly && state.predictOnly == true)
            {
                setOnlyPred(true);
                const payload = {
                    "cropName": state.payload.Crop,
                    "yieldData": {
                        "State_Name": state.payload.locationState,
                        "Season": state.payload.locationSeason,
                        "Area": state.payload.Area
                    }
                }
                console.log(payload)
                performPredOnly(payload).then((response)=>
                {
                    setRecommendation(response.data.recommendation)
                    setYield_d(response.data.yield_d.toFixed(2))

                    setSeasonal(response.data.Seasonal)
                    setAlternative(response.data.Alternative)

                    setLoading(false)
                })
            }
            else
            {
                const payload = {
                    "recommendation": {
                        "N": state.payload.N,
                        "P": state.payload.P,
                        "K": state.payload.K,
                        "temperature": state.payload.temperature,
                        "humidity": state.payload.humidity,
                        "ph": state.payload.ph,
                        "rainfall": state.payload.rainfall
                    },
                    "yieldData": {
                        "State_Name": state.payload.locationState,
                        "Season": state.payload.locationSeason,
                        "Area": state.payload.Area
                    }
                }

                performRecoPred(payload).then((response)=>
                {
                    setRecommendation(response.data.recommendation)
                    setYield_d(response.data.yield_d.toFixed(2))

                    setSeasonal(response.data.Seasonal)
                    setAlternative(response.data.Alternative)

                    setLoading(false)
                })
            }
        }
        else {
            navigate('/recommend')
        }
    },[])

    if(loading)
    {
        return (
            <>
                <Navbar/>
                <div style={styles.bodydiv}>
                    <div style={styles.loading}>Please wait while the model performs prediction!</div>
                </div>
            </>

        );
    }
    else
    {
        return (
            <>
                <Navbar/>
                <div style={styles.bodydiv}>
                    <Row>
                        <Col sm={5} >
                            <div style={styles.outputCard}>
                                <img src={rice} style={{height:'30vh', maxWidth:'50vw'}}/>
                            </div>

                        </Col>
                        <Col sm={7} >
                            <div style={styles.outputCard}>
                                <div style={styles.ttWrapper}>
                                    <div style={styles.titleText}>
                                        {onlyPred ? "Your Crop": "Recommended Crop" } = {recommendation}
                                    </div>
                                    <div style={styles.titleText}>

                                        Predicted Yield = {yield_d} kg
                                    </div>

                                </div>

                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={5} >
                            <div style={styles.outputCard}>
                                <div style={{height:'50vh'}}>
                                    <BarChart chartData={{
                                        labels: Object.keys(alternative),
                                        datasets: [
                                            {
                                                label: "Yield for similar Crops",
                                                data: Object.values(alternative),
                                                backgroundColor: [
                                                    "#2da682",
                                                    "#396250",
                                                    "#6edeb1",
                                                    "#00a665",
                                                    "#4ed59b",
                                                ],
                                            }
                                        ]
                                    }} text="Yield for similar Crops" />

                                </div>

                            </div>
                        </Col>
                        <Col sm={7} >
                            <div style={styles.outputCard}>
                                <div style={{height:'50vh'}}>


                                <LineChart chartData={{
                                    labels: Object.keys(seasonal),
                                    datasets: [
                                        {
                                            label: "Yield for Different Seasons",
                                            data: Object.values(seasonal),
                                            pointBorderWidth: 10,
                                            fill: false,
                                            borderColor: 'rgb(75, 192, 192)',
                                            borderWidth:5,
                                            tension: 0.2
                                        }
                                    ]
                                }} text="Yield for Different Seasons" />
                                </div>
                            </div>
                        </Col>
                    </Row>




                </div>
            </>

        );
    }

}

const styles = {
    bodydiv: {
        background: '#e1e1e1',
        // backgroundImage: `url(${backgroungImg})`,
        marginTop: '9vh',
        paddingTop: '10vh',
        paddingBottom: '10vh',
        paddingLeft: '10vw',
        paddingRight: '10vw',
    },
    loading:
        {
            borderBottom:'4px solid #52734D',
            padding: '1vh',
            color: "#52734D",
            fontSize: '5.5vh',
            fontFamily: 'Jaldi',
            fontWeight:'Bold',
        },
    outputCard:
        {
            backgroundColor:'#ffffff',
            textAlign: 'Center',
            padding: '4vh',
            margin: '0vh 1vw 2vh 1vw',
        },
    titleText:
        {
            borderBottom: '4px solid #52734D',
            padding: '1vh',
            color: "#52734D",
            fontSize: '5.5vh',
            fontFamily: 'Jaldi',
            fontWeight: 'Bold',
            height: '15vh',
            textAlign: 'left',
        },
    ttWrapper:
        {
            height:'30vh',

        }

}

export default Output;
