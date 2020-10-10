import React from 'react';
import Slider from "react-slick";
import { BrandData } from '../../../../database/layouts/enterprice/mooBrand';
import { Container, Row, Col } from 'reactstrap'
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 320,
            settings: { slidesToShow: 1 }
        },
        {
            breakpoint: 420,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 3 }
        },
        {
            breakpoint: 992,
            settings: { slidesToShow: 4 }
        }
    ]
};

const Brand = () => (
    <section className="saas2 brand">
        <Col md="12" xs="12">
            <Container className="saas2-services">
                <Row>
                    <Col md="10" className="offset-md-1">
                        <div className="title">
                            <div className="main-title">
                                <h2>Real Community Driven Project</h2>
                            </div>
                            <div className="sub-title">
                                <p className="sub-title-para">We believe that the community of MOO token holders should drive the project.
                                No Rug pulls and <span>all Team tokens distributed to early buyers and liquidity providers. </span>                           </p>                
                             </div>
                        </div>
                    </Col>
                    <Col xs="12">
                        <Slider className="brand-slider" id="brand-slider" {...settings}>
                            {BrandData.map((item, i) => {
                                return (
                                    <div className="item" key={i}>
                                        <a href="#">
                                            <img alt="brand" className="img-fluid" src={item.img} />
                                        </a>
                                    </div>
                                )
                            })}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </Col>
    </section>
)

export default Brand;