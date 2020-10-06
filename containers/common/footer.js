import React from 'react'
import { Container, Row, Col } from 'reactstrap'
const Footer = () => (
    <>
        <footer className="resume copyright copyright-bg inner-pages-footer">
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="link link-horizontal  text-center mb-3">
                            <img alt="" className="img-fluid" src="/assets/images/logo/MooBlack.png" />
                        </div>
                    </Col>
                    <Col xs="12">
                        <div className="link link-horizontal">
                            <ul className="justify-content-center">
                                <li><a className="copyright-text" href="#">Staking Contract</a></li>
                                <li><a className="copyright-text" href="#">MOO Token</a></li>
                                <li><a className="copyright-text" href="#">Github</a></li>
                                <li><a className="copyright-text" href="#">Telegram</a></li>
                                <li><a className="copyright-text" href="#">Twitter </a></li>
                                <li><a className="copyright-text" href="#">Discord</a></li>
                                <li><a className="copyright-text" href="#">Medium</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs="12">
                        <div className="text-center">
                            <div className="social-link link-horizontal">
                                <ul className="justify-content-center">
                                    <li>
                                        <a className="copyright-text" href="#">
                                            <i aria-hidden="true" className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="copyright-text" href="#">
                                            <i aria-hidden="true" className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="copyright-text" href="#">
                                            <i aria-hidden="true" className="fa fa-google"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="copyright-text " href="#">
                                            <i aria-hidden="true" className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li className="footer-social-list">
                                    <a href="#"><i aria-hidden="true" className="fa fa-facebook"></i></a>
                                </li>
                                <li className="footer-social-list">
                                    <a href="#"><i aria-hidden="true" className="fa fa-twitter"></i></a>
                                </li>
                                <li className="footer-social-list">
                                    <a href="#"><i aria-hidden="true" className="fa fa-google"></i></a>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
        <div className="agency copyright inner-page">
            <Container>
                <Row>
                    <Col sm="6">
                        <div className="link-horizontal">
                            <ul>
                                <li><a className="copyright-text" href="#">Privacy Policy</a></li>
                                <li><a className="copyright-text" href="#">Terms &amp; Conditions</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm="6">
                        <div>
                            <h6 className="copyright-text text-white text-right">Copyright © 2020 Unice by <i aria-hidden="true" className="fa fa-heart"></i> pixelstrap
                            </h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
)

export default Footer
