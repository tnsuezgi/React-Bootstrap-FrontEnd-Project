import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import images from '../assets/images';
import Icons from '../assets/icons';
const Footer = () => {
    return (
        <footer className="text-light py-5 background-color-lac footer-color text-start font-size-16">
            <Container>
                <Row>
                    <Col md={3} xs={12} className="mb-5 mb-md-4 text-center text-md-start">
                        <h5 className="mb-4" style={{color: "rgba(255, 255, 255, 1)"}}>Product</h5>
                        <ul className="list-unstyled">
                            <li className="mb-4">Pricing</li>
                            <li className="mb-4">Overview</li>
                            <li className="mb-4">Browse</li>
                            <li className="mb-4">Accessibility</li>
                            <li className="mb-4">Five</li>
                        </ul>
                    </Col>
                    <Col md={3} xs={12} className="mb-5 mb-md-4 text-center text-md-start">
                        <h5 className="mb-4" style={{color: "rgba(255, 255, 255, 1)"}}>Solutions</h5>
                        <ul className="list-unstyled">
                            <li className="mb-4">Brainstorming</li>
                            <li className="mb-4">Ideation</li>
                            <li className="mb-4">Wireframing</li>
                            <li className="mb-4">Research</li>
                            <li className="mb-4">Design</li>
                        </ul>
                    </Col>
                    <Col md={3} xs={12} className="mb-5 mb-md-4 text-center text-md-start">
                        <h5 className="mb-4" style={{color: "rgba(255, 255, 255, 1)"}}>Support</h5>
                        <ul className="list-unstyled">
                            <li className="mb-4">Contact Us</li>
                            <li className="mb-4">Developers</li>
                            <li className="mb-4">Documentation</li>
                            <li className="mb-4">Integrations</li>
                            <li className="mb-4">Reports</li>
                        </ul>
                    </Col>
                    <Col md={3} xs={12} className="mb-5 mb-md-4 text-center text-md-start">
                        <h5 className="mb-3" style={{color: "rgba(255, 255, 255, 1)"}}>Get the App</h5>
                        <div className="d-flex flex-column align-items-center align-items-md-start" style={{marginBottom: "90px"}}>
                            <img
                                src={images.appStore}
                                alt="App Store"
                                style={{ height: "40px", width: "120px" }}
                                className="mb-2"
                            />
                            <img
                                src={images.googlePlay}
                                alt="Google Play"
                                style={{ height: "40px",  width: "135px" }}
                            />
                        </div>
                        <h5 className="mb-3">Follow Us</h5>
                        <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                            <i className="bi bi-youtube me-2"></i>
                            <i className="bi bi-facebook me-2"></i>
                            <i className="bi bi-twitter me-2"></i>
                            <i className="bi bi-instagram me-2"></i>
                            <i className="bi bi-linkedin me-2"></i>
                        </div>
                    </Col>
                </Row>
                <Row className="pt-4" style={{borderTop: "2px solid rgb(52 62 88)", margin: "2px", padding: "36px 0"}}>
                    <Col md={6} xs={12} className={"text-center text-md-start my-4 my-md-0"}>
                        <p className="mb-0">Collers @ 2023. All rights reserved.</p>
                    </Col>
                    <Col md={6} xs={12} className="text-center text-md-end">
                        <ul className="list-inline mb-0 ">
                            <li className="list-inline-item me-4">Terms</li>
                            <li className="list-inline-item me-4">Privacy</li>
                            <li className="list-inline-item me-4">Contact</li>
                            <li className="list-inline-item ">
                                <img src={Icons.world} className={"me-1"} alt={"World"} />EN</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
