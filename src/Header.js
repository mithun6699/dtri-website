import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



function Header() {
    return (
        <div >
            <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/" style={{color:"#0170C0"}}>HOME</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link >
                            <Link activeClass="active" to="about" spy={true} smooth={true} offset={5} duration={1500} style={{color:"white"}}>
                            About Us
                            </Link>
                     
                     </Nav.Link>
                     <Nav.Link >
                     <Link  activeClass="active" to="rnd" spy={true} smooth={true} offset={5} duration={1500} style={{color:"white"}} >
                     Research and Development
                     </Link>
                     </Nav.Link>
                     <Nav.Link >
                     <Link activeClass="active" to="blog" spy={true} smooth={true} offset={0} duration={1500} style={{color:"white"}} >
                   Blog
                     </Link>
                     </Nav.Link>
                     <Nav.Link >
                     <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={1500} style={{color:"white"}} >
                     Contact Us
                     </Link>
                     </Nav.Link >
                    </Nav>
                   
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
