import React from 'react'
import {Container,Row,Col} from 'reactstrap'
const Schedule = () => (
    <section className="event schedule set-relative" id="schedule">
        <div className="circle">
        </div>
        <Container>
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title title3">
                        <div className="main-title">
                            <h2><span>MOO</span> Timeline</h2>
                        </div>
                        <div className="sub-title">
                            <p>check this section for an up to date <span>timeline/Roadmap</span> of
                                MOO. From the <span>Public Sale</span>...to the launch of <span>staking</span>..
                                to the creation of the <span>CryptoMoo</span> Collectibles and other Community-based incentives.It will
                                all be here.</p>
                        </div>
                    </div>
                </Col>
                <Col xs="12">
                    <div className="cal-time">
                        <div className="time">
                            <h4 className="text-capitalize monday-text">Monday, September 30, 2019</h4>
                        </div>
                    </div>
                    <div className="event-container scrollbar">
                        <div>
                            <div className=" cal-time events">
                                <Row>
                                    <Col md="10">
                                        <div className="schedule-event">
                                            <h5 className="names">MOO Creation</h5>
                                            <img 
                                            height="4px"
                                            width="100px"
                                            alt="" className="img-fluid schedule-img" src="/assets/images/graphics/line.png" />
                                            <p className="schedule-description">The original conception of the MOOs. The foundation
                                            of the MOO farm is built.</p>
                                        </div>
                                    </Col>
                                    <Col md="2">
                                        <div className="timing">
                                            <h5 className="event-time">September 15, 2020</h5>
                                            <div className="border-container">
                                                <div className="border-dashed"></div>
                                            </div>
                                            {/* <h5 className="event-time">10:00</h5> */}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className=" cal-time events">
                                <Row>
                                    <Col md="10">
                                        <div className="schedule-event">
                                            <h5 className="names">Moo Private Sale</h5>
                                            <img 
                                            height="4px"
                                            width="100px"
                                            alt="" className="img-fluid schedule-img" src="/assets/images/graphics/line.png" />
                                            <p className="schedule-description">Dedicated early funders who wanted to Milk the cow early.</p>
                                        </div>
                                    </Col>
                                    <Col md="2">
                                        <div className="timing">
                                            <h5 className="event-time">September 28, 2020</h5>
                                            <div className="border-container">
                                                <div className="border-dashed active"></div>
                                            </div>
                                            {/* <h5 className="active event-time center-content">01:00</h5> */}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className=" cal-time events">
                                <Row>
                                    <Col md="10">
                                        <div className="schedule-event">
                                            <h5 className="names">Moo Pre-Sale</h5>
                                            <img 
                                            height="4px"
                                            width="100px"
                                            alt="" className="img-fluid schedule-img" src="/assets/images/graphics/line.png" />
                                            <p className="schedule-description">Open to Crypto Crazies and degens who want to promote and Milk the Cow.</p>
                                        </div>
                                    </Col>
                                    <Col md="2">
                                        <div className="timing">
                                            <h5 className="event-time center-content">October 13, 2020</h5>
                                            <div className="border-container">
                                                <div className="border-dashed"></div>
                                            </div>
                                            {/* <h5 className="event-time center-content">06:00</h5> */}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className=" cal-time events">
                                <Row>
                                    <Col md="10">
                                        <div className="schedule-event">
                                            <h5 className="names">Moo Uniswap Listing</h5>
                                            <img 
                                            height="4px"
                                            width="100px"
                                            alt="" className="img-fluid schedule-img" src="/assets/images/graphics/line.png" />
                                            <p className="schedule-description">Let the games begin. Those who want to buy and sell Moo. Milk the Cow...build farms or whatever..Have at it.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md="2">
                                        <div className="timing">
                                            <h5 className="event-time center-content">Updated- Listing will be one hour after Pre-Sale conludes</h5>
                                            <div className="border-container">
                                                <div className="border-dashed"></div>
                                            </div>
                                            {/* <h5 className="event-time center-content">10:00</h5> */}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className=" cal-time events">
                                <Row>
                                    <Col md="10">
                                        <div className="schedule-event">
                                            <h5 className="names">MOO Staking & NFT Creation-CryptoMOO</h5>
                                            <img 
                                            height="6px"
                                            width="100px"
                                            alt="" className="img-fluid schedule-img" src="/assets/images/graphics/line.png" />
                                            <p className="schedule-description">Stake and earn more MOO..Create and trade CryptoMOO.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md="2">
                                        <div className="timing">
                                            <h5 className="event-time center-content">October 22, 2020</h5>
                                            <div className="border-container">
                                                <div className="border-dashed"></div>
                                            </div>
                                          
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


export default Schedule;