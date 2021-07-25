import {MovieThumbnail} from './MovieThumbnail'
import './MovieList.scss'

export const MovieList = ({movies, addMovieToWatchlist}) => (
  <ul className="MovieList">
    {movies.map((movie) => (
      <li key={movie.imdbID}>
        <MovieThumbnail movie={movie} addMovieToWatchlist={addMovieToWatchlist}/>
      </li>
    ))}
  </ul>
)
