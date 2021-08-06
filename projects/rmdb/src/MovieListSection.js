
import {MovieList} from './MovieList'
import {Section} from './Section'
/*
MovieListSection only needs to render the children and doesn't need to do anything else with it;
the children already will be at the level where they can interact with the necessary state
*/
export const MovieListSection = ({movies, title, subtitle, addMovieToWatchlist,
                                  onEdit, onDelete, children}) => {

  return (<Section title={title} subtitle={subtitle}>

    {children}

  <MovieList
    movies={movies}
    addMovieToWatchlist={addMovieToWatchlist}
    onEdit={onEdit}
    onDelete={onDelete}/>

</Section>)
}
