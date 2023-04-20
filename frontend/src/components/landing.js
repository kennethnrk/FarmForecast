import React from 'react';
import Navbar from "./navbar";
import ControlledCarousel from "../subcomponents/carouselFF";
import { Col, Row } from "react-bootstrap";
import Downgriditem from "../subcomponents/downgriditem";
import rice from '../assets/OutputPics/rice.jpg'
import wheat from '../assets/OutputPics/Wheat.jpg'
import areca from '../assets/OutputPics/areca.jpg'
import FooterAS from "../subcomponents/footer";

function Landing(props) {
    return (
        <div>
            <Navbar/>
            <div style={styles.bodydiv}>
                <ControlledCarousel/>

                <div style={{
                    background: '#ececec',
                    paddingLeft: '5vw',
                    paddingRight: '5vw',
                }}>
                    <div style={styles.subgriddiv}>
                        <div style={styles.innergrid}>
                            <div style={styles.subheadinggrid}>
                                <Row>
                                    <Col>Our Solutions</Col>
                                </Row>

                            </div>
                            <div>
                                <Row>
                                    <Col>
                                        <Downgriditem text="Accurate Prediction" image={rice}/>
                                    </Col>
                                    <Col>
                                        <Downgriditem text="Crop Recommendation" image={wheat}/>
                                    </Col>
                                    <Col>
                                        <Downgriditem text="Insights" image={areca}/>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterAS/>
        </div>


    );
}

export default Landing;

const styles = {
    bodydiv: {
        background: '#ececec',
        marginTop: '9vh',
        paddingBottom: '10vh',
        color: "#52734D",
    },
    subgriddiv: {
        height: '70vh',
        paddingLeft: '10vw',
        paddingRight: '10vw',
        paddingBottom: '10vh',
        paddingTop: '10vh',
        marginTop: '7vh',
    },
    innergrid: {
        background: '#ffffff',
        height: '60vh',
        borderRadius: '5vh',
    },
    subheadinggrid:
        {
            paddingTop: '1vh',
            textAlign: "center",
            fontFamily: 'Stick No Bills',
            color: "#52734D",
            fontSize: '250%',
            borderBottom: "3px solid #52734D",
        },
}
