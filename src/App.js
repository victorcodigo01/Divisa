import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Button, Form } from "react-bootstrap";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Madrid from './madrid';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Comentarios from './comentarios';

import Nav from 'react-bootstrap/Nav';


function App() {


  return (
  <>


  
  <Navbar bg="dark" variant="dark" className="navegacion">
        <Container>
          <Navbar.Brand href="#home">Victor Divisa IT</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/usuarios">usuarios</Nav.Link>
            <Nav.Link href="/comentarios">comentarios</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

  <BrowserRouter>
      <div className="min-vh-100 d-flex flex-column">
        

        <Routes>
         
          
          <Route path="/usuarios" element={<Madrid />} />
          <Route path="/comentarios" element={<Comentarios />} />

         
        </Routes>
        
      </div>
    </BrowserRouter>
  
  </>
  );
}

export default App;
