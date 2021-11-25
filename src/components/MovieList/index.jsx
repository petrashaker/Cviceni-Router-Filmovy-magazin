import React from 'react';
import {Link} from 'react-router-dom';

import movies from './../../movies.js';

const MovieList = () => {
	return (
		<nav className="movie-list">
			<ul>
				{
					movies.map((movie) => (
						<li key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title}</Link></li>
					))
				}
			</ul>
    </nav>
	)
}

export default MovieList;