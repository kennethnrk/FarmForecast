import React, { useReducer } from 'react';
import Navbar from "./navbar";
import { Col, Row } from "react-bootstrap";
import backgroungImg from "../assets/background.jpg";
import Submitbtn from "../subcomponents/submitbtn";
import Formlabel from "../subcomponents/formlabel";
import Inputbox from "../subcomponents/inputbox";
import { SeasonList, StateList } from "../subcomponents/consts";
import { useNavigate } from "react-router-dom";

function RecoInput(props) {

    const navigate = useNavigate();

    function reducer(currentState, action) {

        switch (action.type){
            case 'Form':
                return { ...currentState, [action.field] : action.value}
            case 'alerttxt':
                return  {...currentState, [action.type] : action.value}
        }

        return currentState
    }
    function updateForm(field, value){
        dispatch({type : 'Form', field : field, value: value.target.value});
    }

    function updateAlert(alerttxt){
        dispatch({type : 'alerttxt', value: alerttxt});
    }


    const [state, dispatch] = useReducer(reducer, { P: 0 , K : 0 , N :0, ph: 0, temperature:0 , humidity: 0, rainfall: 0 , locationState: StateList[0], locationSeason: SeasonList[0] , Area: 0 ,alerttxt: ''});

    const submit = async () =>{
        if(state.N > 140 || state.N < 0)
        {
            updateAlert("N has to be between 0 and 140");
        }
        else if(state.P > 145 || state.P < 5)
        {
            updateAlert("P has to be between 5 and 145");
        }else if(state.K > 205 || state.K < 5)
        {
            updateAlert("K has to be between 5 and 205");
        }else if(state.temperature > 43 || state.temperature < 8)
        {
            updateAlert("Temperature has to be between 8 and 43");
        }else if(state.humidity > 99 || state.humidity < 14)
        {
            updateAlert("Humidity has to be between 14 and 99");
        }else if(state.ph > 9 || state.ph < 3)
        {
            updateAlert("Enter valid PH");
        }else if(state.rainfall > 300 || state.rainfall < 20)
        {
            updateAlert("Rainfall has to be between 20 and 300");
        }else if(state.Area <= 0)
        {
            updateAlert("Area cannot be blank!");
        }
        else
        {
            navigate('/output', { state: { payload: state}})
        }

    }

    const stateOptions =  StateList.map((item)=>
            <option key={item} value={item}>{item}</option>
        )
    const seasonOptions =  SeasonList.map((item)=>
            <option key={item} value={item}>{item}</option>
        )



    return (
        <>
            <Navbar/>
            <div style={styles.bodydiv}>
                <Row style={styles.sideForm} >
                        <Col sm='6' style={styles.leftSide}>

                            <Row style={styles.subSection}>

                                <h3 style={styles.inputHeading}>Soil Properties</h3>
                                <Row className='mb-3'>
                                    <Col sm='4'>
                                        <Formlabel text='N' AT={true}/>
                                        <Inputbox type="number"
                                                  className="form-control"
                                                  placeholder="Nitrogen"
                                                  onChange={(iptv)=>{
                                                      updateForm('N', iptv)
                                                  }}
                                        />
                                    </Col>
                                    <Col sm='4'>
                                        <Formlabel text='P' AT={true}/>
                                        <Inputbox type="number"
                                                  className="form-control"
                                                  placeholder="Phosphorus"
                                                  onChange={(iptv)=>{
                                                      updateForm('P', iptv)
                                                  }}
                                        />
                                    </Col>
                                    <Col sm='4'>
                                        <Formlabel text='K' AT={true}/>
                                        <Inputbox type="number"
                                                  className="form-control"
                                                  placeholder="Potassium"
                                                  onChange={(iptv)=>{
                                                      updateForm('K', iptv)
                                                  }}
                                        />
                                    </Col>
                                </Row>
                                <Row className='mb-3'>

                                    <Col sm={6}><Formlabel text='PH Levels' AT={true}/></Col>
                                    <Col sm={6}>
                                        <Inputbox type="number"
                                                          className="form-control"
                                                          placeholder="Ph Levels"
                                                          onChange={(iptv)=>{
                                                              updateForm('ph', iptv)
                                                          }}
                                        />
                                    </Col>
                                </Row>
                        </Row>
                        <Row style={styles.subSection}>
                            <h3 style={styles.inputHeading}>Weather</h3>
                            <Row className='mb-3'>
                                <Col sm='6'>
                                    <Formlabel text='Temperature' AT={true}/>

                                </Col>
                                <Col sm='6'>
                                    <Inputbox type="number"
                                              className="form-control"
                                              placeholder="Degree Celsius"
                                              onChange={(iptv)=>{
                                                  updateForm('temperature', iptv)
                                              }}
                                    />
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col sm='6'>
                                    <Formlabel text='Humidity' AT={true}/>

                                </Col>
                                <Col sm='6'>
                                    <Inputbox type="number"
                                              className="form-control"
                                              placeholder="g/m^3"
                                              onChange={(iptv)=>{
                                                  updateForm('humidity', iptv)
                                              }}
                                    />
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col sm='6'>
                                    <Formlabel text='Rainfall' AT={true}/>

                                </Col>
                                <Col sm='6'>
                                    <Inputbox type="number"
                                              className="form-control"
                                              placeholder="mm"
                                              onChange={(iptv)=>{
                                                  updateForm('rainfall', iptv)
                                              }}
                                    />
                                </Col>
                            </Row>
                        </Row>
                     </Col>


                    {/*Right side begins**/}


                    <Col sm='6' style={styles.rightSide}>

                        <Row style={styles.subSection}>

                            <h3 style={styles.rInputHeading}>Area Details</h3>
                            <Row className='mb-3'>
                                <Col sm='12'>
                                    <Formlabel text='State' />
                                    <select className="form-select" style={{fontSize:'3vh', color:'#808080'}} onChange={
                                        (iptv)=>{
                                            updateForm('locationState', iptv)
                                        }
                                    }>
                                        {stateOptions}
                                    </select>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col sm='12'>
                                    <Formlabel text='Season' />
                                    <select className="form-select" style={{fontSize:'3vh', color:'#808080'}} onChange={
                                        (iptv)=>{
                                            updateForm('locationSeason', iptv)
                                        }
                                    }>
                                        {seasonOptions}
                                    </select>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col sm='12'>
                                    <Formlabel text='Area' />
                                    <Inputbox type="number"
                                              className="form-control"
                                              placeholder="Area of the field"
                                              onChange={(iptv)=>{
                                                  updateForm('Area', iptv)
                                              }}
                                    />
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                    <div style={{color:'red', fontSize:'2vh', height:'3vh'} } className='my-4'>{state.alerttxt}</div>
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
    bodydiv:{
        background: '#FDFBE2',
        backgroundImage: `url(${backgroungImg})`,
            marginTop: '13vh',
        paddingTop: '10vh',
        paddingBottom: '10vh',
        paddingLeft: '10vw',
        paddingRight: '10vw',
    },
    sideForm:{
        background: '#FFFFFF',
        borderRadius: '5vh',
    },
    leftSide:{
      background: '#52734D',
        borderRadius: '5vh 0 0 5vh',
        padding:'3vh',
        paddingLeft:'5vw',
        paddingRight:'5vw',
    },
    rightSide:{
        background: '#ffffff',
        borderRadius: '0 5vh 5vh 0',
        padding:'3vh',
        paddingLeft:'5vw',
        paddingRight:'5vw',
    },
    inputHeading:
        {
            borderBottom:'4px solid #ffffff',
            padding: '1vh',
            color: "#ffffff",
            fontSize: '5.5vh',
            fontFamily: 'Jaldi',
            fontWeight:'Bold',
        },

    subSection:
        {
            paddingBottom: '7vh',
            padding:'1vh',
        },
    rInputHeading:
        {
            borderBottom:'4px solid #52734D',
            padding: '1vh',
            color: "#52734D",
            fontSize: '5.5vh',
            fontFamily: 'Jaldi',
            fontWeight:'Bold',
        },
}

export default RecoInput;
