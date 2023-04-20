import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import c1 from '../assets/carousel/c1.jpg'
import c2 from '../assets/carousel/c2.jpg'
import c3 from '../assets/carousel/c3.jpg'
import { Col, Row } from "react-bootstrap";

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} >
            <Carousel.Item>
                <Row style={{height:'80vh', padding: null}}>

                    <Col sm={6} style={styles.crSideBox}>
                        <h3 style={styles.crTitle}>Crop Yield Prediction</h3>
                        <p>Get accurate crop yield predictions for your farm.</p>
                    </Col>
                    <Col sm={6} >
                        <img
                            style={styles.imgshiz}
                            className="d-block w-100"
                            src={c1}
                            alt="First slide"
                        />
                    </Col>
                </Row>

            </Carousel.Item>
            <Carousel.Item>
                <Row style={{height:'80vh', padding: null}}>

                    <Col sm={6} style={styles.crSideBox}>
                        <h3 style={styles.crTitle}>Maximize Your Profits</h3>
                        <p>Make informed decisions to optimize your crop yields and profits.</p>
                </Col>
                    <Col sm={6} >
                        <img
                            style={styles.imgshiz}
                            className="d-block w-100"
                            src={c2}
                            alt="First slide"
                        />
                    </Col>
                </Row>

            </Carousel.Item>
            <Carousel.Item>
                <Row style={{height:'80vh', padding: null}}>

                    <Col sm={6} style={styles.crSideBox}>
                        <h3 style={styles.crTitle}>Improve Your Harvest</h3>
                        <p>Use our data-driven insights to increase your crop yields.</p>
                    </Col>
                    <Col sm={6} >
                        <img
                            style={styles.imgshiz}
                            className="d-block w-100"
                            src={c3}
                            alt="First slide"
                        />
                    </Col>
                </Row>

            </Carousel.Item>
        </Carousel>

    );
}
const styles = {
    imgshiz: {
        height: '80vh',
    },
    crTitle:{
        color:'',
        fontSize: '7.5vh',
        fontFamily: 'Jaldi',
        fontWeight:'Bold',
    },
    crSideBox:{
        padding:'20vh',
        paddingTop:'30vh',

    }
}
