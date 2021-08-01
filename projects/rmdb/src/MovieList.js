import {MovieThumbnail} from './MovieThumbnail'
import './MovieList.scss'

export const MovieList = ({movies = [], addMovieToWatchlist, onEdit, onDelete}) => (
  <ul className="MovieList">
    {movies.map((movie) => (
      <li key={movie.imdbID}>
        <MovieThumbnail
          movie={movie}
          addMovieToWatchlist={addMovieToWatchlist}
          onEdit={onEdit}
          onDelete={onDelete}/>
      </li>
    ))}
  </ul>
)
