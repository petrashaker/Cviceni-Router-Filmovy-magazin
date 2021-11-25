import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import MovieList from './components/MovieList'
import Movie from './components/Movie';

import movies from './movies.js';

import './style.css';

const App = () => {
  return (
    <BrowserRouter>
      <h1>Movies</h1>

      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#app'));
