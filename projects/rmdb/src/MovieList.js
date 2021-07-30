import {MovieThumbnail} from './MovieThumbnail'
import './MovieList.scss'

export const MovieList = ({movies = [], addMovieToWatchlist, onClickEditMovie, onClickDelete}) => (
  <ul className="MovieList">
    {movies.map((movie) => (
      <li key={movie.imdbID}>
        <MovieThumbnail
          movie={movie}
          addMovieToWatchlist={addMovieToWatchlist}
          onClickEditMovie={onClickEditMovie}
          onClickDelete={onClickDelete}/>
      </li>
    ))}
  </ul>
)
