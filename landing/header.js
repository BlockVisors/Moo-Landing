import React, { Fragment, useState } from 'react';
import { Container, Row, Col, Button,Nav, NavItem, NavLink } from 'reactstrap'
const Header = () => {

    const [navbar, setNavbar] = useState(false);
    const toggleNav = () => {
        setNavbar(!navbar)
    }
    return (

        <Fragment>
            <header>
                <Container fluid={true}>
                    <Nav>
                    <Row>
                        <Col>
                            <div className="top-header">
                                <div className="logo">
                                    <a className="navbar-brand" href="#home"><img src="assets/images/landing/MooLogoPink"
                                        alt="logo" /></a>
                                </div>
                                <div className="main-menu m-x-auto" id="nav">
                                    <nav id="navbar-example2" className="navbar navbar-expand-lg navbar-light">
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#scroll-spy"
                                            aria-controls="scroll-spy" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNav}>
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className={`collapse navbar-collapse ${navbar === true ? 'show' : ''}`} id="scroll-spy">
                                            <ul className="navbar-nav mx-auto nav">
                                                <li className="nav-item">
                                                    <a className="nav-link active" href="#home">About</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#pages">pages</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#portfolio">portfolio</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#feature">CryptoMoo</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="https://pixelstrap.freshdesk.com">MOO Farms</a>
                                                </li>
                                                <button id="banner-btn">
                                                    Staking
                                                </button>
                                                <button id="banner-btn">
                                                    MOO Marketplace
                                                </button>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                {/* <div className="purchase-block">
                                    <span className="cartpurchase"><i className="fa fa-cart-arrow-down"></i></span>
                                    <a className="purchase-btn" href="https://themeforest.net/user/pixelstrap/portfolio">purchase</a>
                                </div>
                                <div className="purchase-block">
                                    <span className="cartpurchase"></span>
                                    <a className="purchase-btn" href="https://themeforest.net/user/pixelstrap/portfolio">purchase</a>
                                </div>
                                <div className="">
                                   <Button>Moo App</Button>
                                    <a className="purchase-btn" href="https://themeforest.net/user/pixelstrap/portfolio"></a>
                                </div>
                                <div className="">
                                   <Button>Moo Market</Button>
                                    <a className="purchase-btn" href="https://themeforest.net/user/pixelstrap/portfolio"></a>
                                </div> */}
                            </div>
                        </Col>
                    </Row>
                    </Nav>
                </Container>
            </header>
        </Fragment>
    )
}

export default Header;