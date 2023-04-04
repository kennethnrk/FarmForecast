import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { performRecoPred } from "../APIcalls/calls";
import Navbar from "./navbar";

function Output(props) {
    const navigate = useNavigate()

    const {state} = useLocation();

    const [recommendation, setRecommendation] =  useState("")
    const [yield_d, setYield_d] =  useState(0)
    const [loading, setLoading] =  useState(true)

    useEffect(()=>
    {
        if(state?.payload){
            // console.log(state.payload)
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
                setYield_d(response.data.yield_d)
                setLoading(false)
            })


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
                    <div style={styles.loading}>
                        Recommended Crop={recommendation}
                        <br/>
                        Predicted Yield = {yield_d}
                    </div>
                </div>
            </>

        );
    }

}

const styles = {
    bodydiv: {
        background: '#FDFBE2',
        // backgroundImage: `url(${backgroungImg})`,
        marginTop: '13vh',
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
}

export default Output;
