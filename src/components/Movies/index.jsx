import React from "react";
import { Outlet } from "react-router";
import MovieList from "../MovieList";

const Movies = () => {
    return (
        <>
        <h1>Movies</h1>
        <p>V kinech právě hrají:</p>

        <div className="movies">
            <MovieList />
            <Outlet />
        </div>
        </>
    )
}

export default Movies;