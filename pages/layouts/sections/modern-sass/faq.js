import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import { Container, Row, Col } from 'reactstrap'
const Faq = () => {
    const DummyContent1 = () => (
        <div className="collapse show" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
            <div className="card-body">
                MOO Finance is a DeFi staking platform where you can stake your MOO Lp or sLP tokens for 
                for more MOO token. In addition, you may use the rewards to stake tthat MOO for Crypto MOO NFTs tokens.
            </div>
        </div>
    );
    const DummyContent2 = () => (
        <div className="collapse show" id="collapseicon1" aria-labelledby="collapseicon1" data-parent="#accordionoc">
            <div className="card-body">
               You may get MOO buy particpating in the Pre-Sale or by purchasing on Uniswap after listing.
            </div>
        </div>
    );
    const DummyContent3 = () => (
        <div className="collapse show" id="collapseicon2" data-parent="#accordionoc">
            <div className="card-body">
                MOO will be sold at the price of 280 MOO = 1 ETH. After that it will sell on Uniswap at 180 MOO = 1 ETh. After that point..
                the open market will determine it's price.
            </div>
        </div>
    );
    const DummyContent4 = () => (
        <div className="collapse show" id="collapseicon3" data-parent="#accordionoc">
            <div className="card-body">
                The Pre-Sale will be held on October 13, 2020 1600 UTC time
            </div>
        </div>
    );
    const DummyContent5 = () => (
        <div className="collapse show" id="collapseicon1" aria-labelledby="collapseicon1" data-parent="#accordionoc">
            <div className="card-body">
                No. we will be here. Grow the team and community as fast we can.
            </div>
        </div>
    );
    const DummyContent6 = () => (
        <div className="collapse show" id="collapseicon2" data-parent="#accordionoc">
            <div className="card-body">
                By going to the stake portal at: stake.moofinance.org
            </div>
        </div>
    );
    const DummyContent7 = () => (
        <div className="collapse show" id="collapseicon3" data-parent="#accordionoc">
            <div className="card-body">
                CryptoMoo are unique non-fungible token collectibles. You may stake your reward from your stake of MOO 
                or LP liquidity tokens to mint a CryptoMoo collectible.
            </div>
            </div>
    );
    return (
        <section className="saas1 faq" id="faq">
            <Container>
                <Row>
                    <Col md="8">
                        <div className="faq-block">
                            <div>
                                <h3 className="frequent-text">Frequently Asked Questions</h3>
                                <h6>Some Frequently asked questions about Moo Finance and Moo Token.
                                </h6>
                                <Accordion atomic={true}>
                                    <AccordionItem className="card-header bg-primary" title="What is MOO Finance?">
                                        <DummyContent1 className="active" />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="How do I get MOO Token?">
                                        <DummyContent2 />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="What is value of MOO?">
                                        <DummyContent3 />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="When is the Pre-Sale?">
                                        <DummyContent4 />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="Is this a scam?">
                                        <DummyContent5 />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="How do i stake MOO?">
                                        <DummyContent6 />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="What are CryptoMOO and how do i get them?">
                                        <DummyContent7 />
                                    </AccordionItem>
                                </Accordion>
                                <h6 className="link">Still have a question? Reach out to us: <a>info@moofinance.org</a></h6>
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="faq-img-block">
                            <img 
                            height="464"
                            width="290"
                            alt="faq-person" className="img-fluid" src="/assets/images/graphics/faq.png" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Faq;