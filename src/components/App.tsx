import { Container } from 'reactstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Nav from './Nav/Nav';

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
