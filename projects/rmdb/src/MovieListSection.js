import {useState} from 'react'
import {MovieList} from './MovieList'
import {Section} from './Section'
/*
MovieListSection only needs to render the children and doesn't need to do anything else with it;
the children already will be at the level where they can interact with the necessary state
*/
export const MovieListSection = ({movies, title, subtitle, addMovieToWatchlist, onClickEditMovie, children}) => {

  return (<Section title={title} subtitle={subtitle}>

    {children}

  <MovieList movies={movies} addMovieToWatchlist={addMovieToWatchlist} onClickEditMovie={onClickEditMovie}/>

</Section>)
}
