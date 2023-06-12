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
            {
              products.map((a, i)=>{
                return(
                  <Modal products={products[i]} i={i+1}></Modal>
                )
              })
            }
        </div>
      </div> 
    </div>
  );
}

function Modal(props) {
  return (
    <div className='col-md-4'>
      <div className={'main-' + props.i }/>
        <h4> {props.products.title} </h4>
        <p> {props.products.content} </p>
    </div>
  )
}

export default App;
