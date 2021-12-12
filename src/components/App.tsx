import { Container } from 'reactstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Nav from './Nav/Nav';
import PlayerSearch from './SearchPlayer/PlayerSearch';
import Stats from './Stats/Stats';

function App() {
  return (
    <div className="App">
      <Container>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<PlayerSearch />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div >
  );
}

export default App;
