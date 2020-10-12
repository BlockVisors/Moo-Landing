import React from 'react';
import { Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
    Button,
    ButtonGroup
} from 'reactstrap';

export default class NavMain extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <Fragment>
      <Navbar navbar navbar-dark expand="md">
        {/* <NavbarBrand href="/">
        <img
              src="assets/images/logo/MooLogoPink.png"
              width="188"
              height="80"
              className="d-inline-block align-top"
              //alt="React Bootstrap logo"
              />
        </NavbarBrand> */}
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
          
            <NavItem>
              <NavLink href="#faq">FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#sale">MOO Token</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#cryptoMoo">CryptoMoo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Moo Paper</NavLink>
            </NavItem>
          
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Moo Farms</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Stake CryptoMoo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Moo Market</NavLink>
            </NavItem>
            {/* <a className="btn btn-default" href="#">Stake</a>
            <a className="btn btn-default" href="#">Marketeplace</a> */}


            {/* <Button outline color="primary">primary</Button>{' '}
            <Button outline color="secondary">secondary</Button>{' '} */}
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
                </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                  </DropdownItem>
                <DropdownItem>
                  Option 2
                  </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  }
}