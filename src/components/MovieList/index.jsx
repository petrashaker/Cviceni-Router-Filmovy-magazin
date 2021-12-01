import React from 'react';
import {NavLink} from 'react-router-dom';

import movies from './../../movies.js';
import './style.css';

let activeStyle = {backgroundColor: "dodgerblue", color: "white", padding: 10 }
let notActiveStyle = {backgroundColor: "white", color:"darkblue", padding: 10 }


const MovieList = () => {
	return (
		<nav className="movie-list">
			<ul>
				{
					movies.map((movie) => (
						<li key={movie.id}>
							<NavLink	style={({isActive}) => isActive ? activeStyle : notActiveStyle}	
										to={`/movies/${movie.id}`}
										>
										{movie.title}
							</NavLink>
						</li>
					))
				}
			</ul>
    </nav>
	)
}

export default MovieList;