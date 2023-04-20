import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Col, Row } from "react-bootstrap";

function footerAS() {
    return (
        <div style={styles.griddiv}>
                <Row>

                    <Col>
                        <div style={styles.subheadinggrid}>
                            Our Pages
                        </div>
                        <div>
                            <a href="/recommend" style={styles.link}>
                                Recommend
                            </a>
                            <br/>
                            <a href="/predict" style={styles.link}>
                                Predict
                            </a>
                            <br/>

                        </div>
                    </Col>
                    <Col>
                        <div style={styles.subheadinggrid}>
                            Services
                        </div>
                        <div>
                            <a href="#" style={styles.link}>
                                Accurate Prediction
                            </a>
                            <br/>
                            <a href="#" style={styles.link}>
                                Crop recommendation
                            </a>
                            <br/>
                            <a href="#" style={styles.link}>
                                Insights
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div style={styles.subheadinggrid}>
                            Contact Us
                        </div>
                        <div>
                            <a href="#" style={styles.link}>
                                <i className="fa fa-envelope" aria-hidden="true"></i> &nbsp;
                                kenneth.nrk123@gmail.com
                            </a>
                            <br/>
                            <a href="#" style={styles.link}>
                                <i className="fa fa-instagram" aria-hidden="true"></i> &nbsp;
                                kenneth_nrk
                            </a>
                            <br/>
                            <a href="#" style={styles.link}>
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i> &nbsp;
                                Kenneth Rodrigues
                            </a>
                        </div>
                    </Col>
                </Row>
        </div>

    );
}

const styles = {

    subheadinggrid:
        {
            padding:0,
            paddingTop: '1vh',
            fontFamily: 'Stick No Bills',
            color: '#91C788',
            fontSize: '250%',
            borderBottom: "3px solid #91C788",
            marginBottom:'4vh',
        },
    griddiv: {
        height: '30vh',
        background:'#52734D',
        paddingLeft: '10vw',
        paddingRight: '10vw',
    },
    link:{
        fontSize: '120%',
        color: '#FDFBE2',
        textDecoration: 'none',
    }

}

export default footerAS;
