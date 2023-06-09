import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import fflogo from '../../src/assets/farmforecast-logo-zip-file/png/logo-no-background.png';


function navigationbar({loggedIn}) {
    function logout(){
        localStorage.removeItem('Name');
        localStorage.removeItem('MobilePhone');
        window.location.href = '/';
    }

    return (
        <Navbar style={{background: '#DDFFBC'}} expand="lg" fixed="top">
            <Container  fluid style={{padding:10, paddingRight:'7vw', paddingLeft:'7vw', height:'13vh',}}>
                <Navbar.Brand href="/" ><img alt={"Eppo"} src={fflogo} style={{height:'12vh'}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                {!loggedIn ? <Navbar.Collapse id="navbarScroll">
                    <Nav style={{marginLeft: 'auto'}}>
                        <Nav.Link href="/recommend" style={styles.Navlink}>Recommend</Nav.Link>
                    </Nav>
                    <Nav className="d-flex">
                        <Nav.Link href="/predict" style={styles.Navlink2 }>Predict</Nav.Link>
                    </Nav>

                </Navbar.Collapse>: <Navbar.Collapse>
                    <Nav style={{marginLeft: 'auto'}}>
                        <Nav.Link href="/Dashboard" style={styles.Navlink}>Dashboard</Nav.Link>
                    </Nav>
                    <Nav className="d-flex">
                    <Nav.Link onClick={logout} style={styles.Navlink2 }>Logout</Nav.Link>
                </Nav></Navbar.Collapse>}

            </Container>
        </Navbar>
    );
}

const styles ={
    Navlink:{
        fontSize: '6.5vh',
        color: '#52734D',
        fontFamily: 'Jaldi',

    },
    Navlink2:{
        fontSize: '6.5vh',
        color: '#91C788',
        fontFamily: 'Jaldi',


    }
}

export default navigationbar;
