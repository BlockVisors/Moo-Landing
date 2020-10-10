import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Feature = () => (
    <section className="saas2 feature booking" id="feaure">
        <Container id="feature">
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title">
                        <div className="main-title">
                            <h2>Moo Ecosystem Features</h2>
                        </div>
                        <div className="sub-title">
                            <p className="sub-title-para"><p className="sub-para text-white">MOO restructures the DeFi narrative to reward token holders in many ways.</p></p>
                            <p className="sub-para text-white">On-Platform staking with Collectible Moo Tokens</p>
                        </div>
                    </div>
                </Col>
                <Col xl="8" md="7">
                    <div className="center-text justify-content-center">
                        <div className="image-container">
                            <img alt="" className="img-fluid advance-feature-img"
                                src="/assets/images/saas2/advance-feature/01.png" />
                        </div>
                    </div>
                </Col>
                <Col xl="4" md="5">
                    <div>
                        <div className="center-content justify-content-start">
                            <img width="110"
                                height="110"
                            alt="" className="img-fluid" src="/assets/images/graphics/6.png" />
                            <div className="feature-content">
                                <h5 className="feature-head">Buy MOO Token via Public Sale/Uniswap</h5>
                                <p className="feature-para">Get in early to get MOO token in our presale.Details are below. 
                                You may also buy on Uniswap or Sushiswap.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="center-content justify-content-start">
                            <img width="110"
                                height="110"alt="" className="img-fluid" src="/assets/images/graphics/7.png" />
                            <div className="feature-content">
                                <h5 className="feature-head">Stake Liquidity on Uniswap/SushiSwap</h5>
                                <p className="feature-para">Add liquidity to the MOO/ETH pools and Uniswap or 
                                Sushiswap to recieve your LP or sLP tokens.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="center-content justify-content-start">
                            <img width="110"
                                height="110" alt="" className="img-fluid" src="/assets/images/graphics/8.png" />
                            <div className="feature-content">
                                <h5 className="feature-head">Stake on Platform for Rewards in MOO</h5>
                                <p className="feature-para">Take your LPs and SLPs to your site for 100%+ returns.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="center-content justify-content-start">
                            <img width="110"
                                height="110"
                            alt="" className="img-fluid" src="/assets/images/graphics/9.png" />
                            <div className="feature-content">
                                <h5 className="feature-head">Stake Rewards for MOO NFT Collectible</h5>
                                <p className="feature-para">Get Rewarded for keeping your MOO in our ecosystem buy staking those rewards
                                to mint a unique and tradeable Non-Fungible Token--the CryptoMoo.</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Feature;