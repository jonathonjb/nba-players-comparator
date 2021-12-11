import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import { Button } from 'reactstrap';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Container>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div >
  );
}

export default App;
