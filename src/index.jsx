import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import MovieList from './components/MovieList'

import movies from './movies.js';

import './style.css';
import Menu from './components/Menu';
import Home from './components/Home';
import Reviews from './components/Reviews';
import Articles from './components/Acticles';
import Movies from './components/Movies';
import Movie from './components/Movie';
import NoMovieSelected from './components/NoMovieSelected';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/movies" element={<Movies />} >
          <Route index element={<Navigate to="/movies/1" replace={true}/>} />
          {/* <Route index element={< NoMovieSelected />} /> */}
          <Route path=":id" element={< Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#app'));
