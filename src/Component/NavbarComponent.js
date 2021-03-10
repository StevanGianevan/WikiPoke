import React from 'react'
import './Navbar.css'
import {Nav , Navbar , NavDropdown , Form ,FormControl , Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const NavbarComponent =() =>{
    const navStyle = {
        color : 'white'
    }
    return (
        <Navbar bg="dark" variant = "dark" expand="lg" className = "Navbar">
            <Navbar.Brand href="./Component/ContentComponent.js"><strong>Wiki</strong>-Poke</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className ="ml-auto">
                    <Link style = {navStyle} to = "/MyPokemon" className = "ml-4">
                        My Pokemon
                    </Link>
                    <Link style = {navStyle} to ="/" className = "ml-4"> 
                        List Pokemon
                    </Link>
                    {/* <Link style = {navStyle} to ="/DetailPokemon" className = "ml-4">
                        Detail Pokemon
                    </Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent