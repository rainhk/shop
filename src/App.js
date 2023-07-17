import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import {data} from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/details';
import axios from 'axios';
import Cart from './routes/Cart';

// styled components

function App() {

  let [products, productschange] = useState(data);

  let navigate = useNavigate();

  useEffect(()=>{
    try {
      localStorage.getItem('history')
    } catch (error) {
      localStorage.setItem('history', JSON.stringify([]));
    }
    // localStorage.setItem('history', JSON.stringify([]));
  }, [])
  


  // sort by item name
  function ItemSort(){
  let newProducts = [...data].sort(function(a,b){
    var titleA = a.name.toLowerCase(), titleB = b.name.toLowerCase()
    if (titleA < titleB){
      return -1
    }
    if (titleA > titleB){
      return 1
    }
    return 0
  });
  productschange(newProducts);
  }

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/home">Shopping mall</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=> { navigate('/home')}}> Home </Nav.Link>
          <Nav.Link onClick={()=> { navigate('/about')}}> About </Nav.Link>
          <Nav.Link onClick={()=> { navigate('/cart')}}> Cart </Nav.Link>
        </Nav>
        </Container>
      </Navbar>

    <Routes>
      <Route path='/home' element={
      <div> 
        <div className='main-bg'></div>
        <button onClick={ItemSort} className='btn btn-danger'> sort </button>
        <div className='container'>
        <div className='row'>
            {
              products.map((a, i)=>{
                return(
                  <Modal products={products[i]} i={a.id}></Modal>
                )
              })
            }
        </div>
      </div> 
      <button onClick={()=>{
        // loading

        // count button to stop duplicate
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((items)=>{
          let newProducts = [...products, ...items.data];
          productschange(newProducts);
          // hide loading

          // axios.post()
          // send data to server
        })
        .catch(()=>{
          // hide loading
          alert("failed to add more items")})
      }}> Update items </button>
         </div>}/>
        
      {/* add loading feature */}
      
      <Route path='/detail/:id' element={<Detail products = {products} />}/>

      <Route path='/cart' element={<Cart/>}></Route>

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

// breaks after sorting
function Modal(props) {
  return (
    <div className='col-md-4'>
      <Link to={"/detail/" + props.i}>
        <div className={'main-' + props.i }/>
      </Link>
        <h4> {props.products.name} </h4>
        <p> {props.products.content} </p>
    </div>
  )
}

export default App;
