import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import { useState } from 'react';
import {data} from './data.js';

function App() {

  let [products] = useState(data)
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Shopping mall</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#Shoes">Shoes</Nav.Link>
          <Nav.Link href="#Tops">Tops</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-4'> 
            <div className='main-first'/>
            <h4> Rain storm glass </h4>
            <p> Cloud shape storm glass </p>
          </div>
          <div className='col-md-4'> 
            <div className='main-second'/> 
            <h4> Rainy humidifier </h4>
            <p> Raining humidifer with lamp feature </p>
          </div>
          <div className='col-md-4'>
            <div className='main-third'/>
            <h4> cloud lamp </h4> 
            <p> Cloud shape lamp </p>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default App;
