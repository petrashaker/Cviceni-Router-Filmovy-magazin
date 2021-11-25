import React from 'react';
import {Link, useParams} from 'react-router-dom';

import movies from './../../movies.js';

const Movie = () => {
	const {id} = useParams();
	const movie = movies.find(movie => movie.id == id);
	console.log(id, movie);

	return (
		<div className="movie">
			<img src={`/assets/${movie.poster}`} alt={movie.title} />
			<h2>{movie.title}</h2>
			<p>{movie.storyline}</p>
			<p><Link to="/">Zpět na seznam filmů</Link></p>
		</div>
	)
}

export default Movie;