import React, { useReducer } from 'react';
import Navbar from "./navbar";
import { Col, Row } from "react-bootstrap";
import backgroungImg from "../assets/background.jpg";
import Submitbtn from "../subcomponents/submitbtn";
import Formlabel from "../subcomponents/formlabel";
import Inputbox from "../subcomponents/inputbox";
import { CropList, SeasonList, StateList } from "../subcomponents/consts";
import { useNavigate } from "react-router-dom";

function PredictInput(props) {

    const navigate = useNavigate();

    function reducer(currentState, action) {

        switch (action.type) {
            case 'Form':
                return { ...currentState, [action.field]: action.value }
            case 'alerttxt':
                return { ...currentState, [action.type]: action.value }
        }

        return currentState
    }

    function updateForm(field, value) {
        dispatch({ type: 'Form', field: field, value: value.target.value });
    }

    function updateAlert(alerttxt) {
        dispatch({ type: 'alerttxt', value: alerttxt });
    }


    const [state, dispatch] = useReducer(reducer, {
        locationState: StateList[0],
        locationSeason: SeasonList[0],
        Area: 0,
        Crop: CropList[0],
        alerttxt: ''
    });

    const submit = async () => {
        if (state.Area <= 0) {
            updateAlert("Area cannot be blank!");
        } else {
            navigate('/output', { state: { payload: state, predictOnly:true } })
        }

    }

    const stateOptions = StateList.map((item) =>
        <option key={item} value={item}>{item}</option>
    )
    const seasonOptions = SeasonList.map((item) =>
        <option key={item} value={item}>{item}</option>
    )
    const cropOptions = CropList.map((item) =>
        <option key={item} value={item}>{item}</option>
    )


    return (
        <>
            <Navbar/>
            <div style={styles.bodydiv}>
                <Row style={styles.sideForm}>


                    <Col sm='12' style={styles.rightSide}>

                        <Row style={styles.subSection}>

                            <h3 style={styles.rInputHeading}>Prediction Data</h3>

                            <Row className='mb-3'>
                                <Col sm='12'>
                                    <Formlabel text='Crop'/>
                                    <select className="form-select" style={{ fontSize: '3vh', color: '#808080' }}
                                            onChange={
                                                (iptv) => {
                                                    updateForm('Crop', iptv)
                                                }
                                            }>
                                        {cropOptions}
                                    </select>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col sm='12'>
                                    <Formlabel text='State'/>
                                    <select className="form-select" style={{ fontSize: '3vh', color: '#808080' }}
                                            onChange={
                                                (iptv) => {
                                                    updateForm('locationState', iptv)
                                                }
                                            }>
                                        {stateOptions}
                                    </select>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col sm='12'>
                                    <Formlabel text='Season'/>
                                    <select className="form-select" style={{ fontSize: '3vh', color: '#808080' }}
                                            onChange={
                                                (iptv) => {
                                                    updateForm('locationSeason', iptv)
                                                }
                                            }>
                                        {seasonOptions}
                                    </select>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col sm='12'>
                                    <Formlabel text='Area'/>
                                    <Inputbox type="number"
                                              className="form-control"
                                              placeholder="Area of the field"
                                              onChange={(iptv) => {
                                                  updateForm('Area', iptv)
                                              }}
                                    />
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <div style={{ color: 'red', fontSize: '2vh', height: '3vh' }}
                                     className='my-4'>{state.alerttxt}</div>
                                <Submitbtn text='Submit' onPress={submit}/>


                            </Row>

                        </Row>
                    </Col>
                </Row>


            </div>


        </>


    );
}

const styles = {
    bodydiv: {
        background: '#FDFBE2',
        backgroundImage: `url(${backgroungImg})`,
        marginTop: '13vh',
        paddingTop: '10vh',
        paddingBottom: '10vh',
        paddingLeft: '10vw',
        paddingRight: '10vw',
    },
    sideForm: {
        background: '#FFFFFF',
        borderRadius: '5vh',
    },

    rightSide: {
        background: '#ffffff',
        borderRadius: '5vh',
        padding: '3vh',
        paddingLeft: '5vw',
        paddingRight: '5vw',
    },
    subSection:
        {
            paddingBottom: '7vh',
            padding: '1vh',
        },
    rInputHeading:
        {
            borderBottom: '4px solid #52734D',
            padding: '1vh',
            color: "#52734D",
            fontSize: '5.5vh',
            fontFamily: 'Jaldi',
            fontWeight: 'Bold',
        },
}

export default PredictInput;
