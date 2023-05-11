import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'

function App() {
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
    </div>
  );
}

export default App;
