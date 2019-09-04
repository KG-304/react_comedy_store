import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link } from  'react-router-dom'  

class Navi extends React.Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Comedy Store</Navbar.Brand>
            <Nav className="mr-auto">
              <Link to="/" style={{textDecoration: 'none'}}><Nav.Link href="#home">Home</Nav.Link></Link>
              <Link to="/" ><Nav.Link href="#features">Open Mics</Nav.Link></Link>
              <Nav.Link href="#pricing">More Info</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        )
    }
}

export default Navi