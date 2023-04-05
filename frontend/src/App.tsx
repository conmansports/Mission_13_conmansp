import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import TopBanner from './Blah';
import Home from './home';
import MovieList from './movies';
import Podcast from './mypodcasts';

function App() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <TopBanner saying="Joel Hiltons Movie Library" />
        </div>
        <nav className="col-2 align-self-center text-start">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/podcasts">Podcasts</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcasts" element={<Podcast />} />
        <Route path="/movies" element={<MovieList />} />
      </Routes>
    </>
  );
}

export default App;
