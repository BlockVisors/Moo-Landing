import React from 'react';
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap'
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: false,
    centerMode: true,
    swipeToSlide: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                centerPadding: '15px',
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                centerPadding: '42px',
            }
        },
    ]
};

const SliderSection = () => (
    <section className="saas2 laptop-slider bg-gradient" id="screenshot">
        <Container>
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title">
                        <div className="main-title">
                            <h2 className="text-white">Moo Tokenomics</h2>
                        </div>
                        <div className="sub-title">
                            <p className="sub-title-para text-white">Check out the Moo System.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <Col md="10" className="offset-md-1">
        <div className="announcer-img">
                            <img alt="" className="img-fluid" src="/assets/images/graphics/Tokenomics.png" />
                            
                        </div>
                </Col>
                
        {/* <Container fluid={true}>
            <div className="slider-container">
                <Slider className="trainers-slider" id="trainers-slider" {...settings}>
                    <div className="item">
                        <img alt="" className="img-fluid" src="/assets/images/saas2/screen-shot/screen.png" />
                    </div>
                    {/* <div className="item">
                        <img alt="" className="img-fluid" src="/assets/images/saas2/screen-shot/screen.png" />
                    </div>
                    <div className="item">
                        <img alt="" className="img-fluid" src="/assets/images/saas2/screen-shot/screen.png" />
                    </div>
                    <div className="item">
                        <img alt="" className="img-fluid" src="/assets/images/saas2/screen-shot/screen.png" />
                    </div>
                    <div className="item">
                        <img alt="" className="img-fluid" src="/assets/images/saas2/screen-shot/screen.png" />
                    </div>
                    <div className="item">
                        <img alt="" className="img-fluid" src="/assets/images/saas2/screen-shot/screen.png" />
                    </div> */}
                {/* </Slider>
            </div>
        </Container> */} */}
    </section>
)

export default SliderSection;