import React from 'react';
import Tilt from 'react-parallax-tilt';
import {Container,Row,Col, Button} from 'reactstrap'
const Business = () => (
    <section className="saas2 bg-gradient quick-sol">
        <Container className="set-center-div">
            <Row>
                <Col lg="6">
                    <div className="offers-container">
                        <h1 className="text-white offer-heading-text">MOO Meme farming for NFTs</h1>
                        <div className="bottom-border">
                        </div>
                        <div className="offers-content">
                            <div className="d-flex">
                                <i aria-hidden="true" className="fa fa-check-circle"></i>
                                <div>
                                    <h2 className="offer-main-text text-white">Unique Collectibles</h2>
                                    <p className="offer-sub-text text-white">You can stake your meme tokens and farm reward points. Points are earned every day based on how many meme you stake. When you earn enough points, you can redeem them for a collectable NFT Meme Card.
                                     Collect them for yourself or sell them to others on Open Sea. It’s up to you.
                                    </p>
                                    <div className="d-flex">
                                    <Button id="nft-button">
                                        Start Farming
                                    </Button>
                                    </div>
                                </div>

                               
                            </div>
                        </div>
                        <div className="offers-content">
                            <div className="d-flex">
                                <i aria-hidden="true" className="fa fa-check-circle"></i>
                                <div>
                                    <h2 className="offer-main-text text-white">You can buy and sell NFTs on Open Sea</h2>
                                    <p className="offer-sub-text text-white">Non‑fungible tokens (NFTs) are a special type of token on the Ethereum network that are used to create verifiable digital scarcity. That means your collectable Meme Cards are limited and digitally scarce. 
                                    If you feel that they have value, you might want to sell them on Open Sea to other people.
                                    industry.</p>
                                    <Button id="nft-button">
                                       Trade NFTs on OpenSea
                                    </Button>

                                </div>
                            </div>
                        </div>
                       
                    </div>
                </Col>
                <Col>
                <div className="d-flex">
                <div className="center-text side-img">
                    <Tilt perspective="20000" transitionSpeed="3000">
                        <img width="522"
                                height="400"
                        alt="" className="img-fluid" src="/assets/images/graphics/site.png" />
                    </Tilt>
                </div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Business;