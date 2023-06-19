import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import { useState } from 'react';
import {data} from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './components';



function App() {

  let [products] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Shopping mall</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=> { navigate('/home')}}> Home </Nav.Link>
          <Nav.Link onClick={()=> { navigate('/about')}}> About </Nav.Link>
        </Nav>
        </Container>
      </Navbar>



    <Routes>
      <Route path='/home' element={
      <div> 
        <div className='main-bg'></div>
        <div className='container'>
        <div className='row'>
            {
              products.map((a, i)=>{
                return(
                  <Modal products={products[i]} i={i}></Modal>
                )
              })
            }
        </div>
      </div> 
         </div>}/>
      <Route path='/detail/:id' element={<Detail products = {products} />}/>

      <Route path='/about' element={<About/>}>
        <Route path='location' element = {<div> fdsa </div>} />
      </Route>

      <Route path='/event' element={<Event/>}>
        <Route path='one' element={<div> Receive 80% coupon </div>}/>
        <Route path='two' element={<div> Receive 20% coupon </div>}/>
      </Route>
      

      <Route path='*' element={<div> Page does not exist </div>} />
    </Routes>

    </div>
  );
}

function Event(){
  return (
    <div>
      <h4> Today's event </h4>
      <Outlet></Outlet>
    </div>
  )
}

function About(){
  return (
    <div>
      <h4> company info </h4>
      <Outlet></Outlet>
    </div>
  )
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
