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
            <Link to="/"><Navbar.Brand href="/">Comedy Store</Navbar.Brand></Link>
            <Nav className="mr-auto">
              <Link to="/" style={{textDecoration: 'none'}}><Nav.Link href="/">Home</Nav.Link></Link>
              <Link to="/view-all" ><Nav.Link href="/view-all">Open Mics</Nav.Link></Link>
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