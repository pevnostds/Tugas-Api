
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {AnimeList} from './components/AnimeList'
import {DetailAnime} from './components/DetailAnime'
import {NavbarComponents} from './components/Navbar'
import './App.css'



function App() {
  return (
    <Router>
    <NavbarComponents />
    <Routes>
      <Route path="/" element={<AnimeList /> } />
      <Route path="/anime/:id" element={<DetailAnime />} />
    </Routes>
  </Router>
    
  );
}

export default App;