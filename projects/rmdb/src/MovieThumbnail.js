import {MoviePoster} from './MoviePoster'
import './MovieThumbnail.scss'
import {ConfirmableButton } from './ConfirmableButton'
import {Link} from 'react-router-dom'

export const MovieThumbnail = ({movie, addMovieToWatchlist, onEdit, onDelete, children}) => (
  <div className="MovieThumbnail">

    <Link to={`/movies/${movie.imdbID}`}>
      <MoviePoster poster={movie.Poster} />
    </Link>

    {movie.Title}
    {addMovieToWatchlist && (<button className="addMovieToWatchlist" onClick={() => addMovieToWatchlist(movie)} >+</button>)}

    {onEdit && (
      <button type="button" onClick={() => onEdit(movie)}>Edit</button>
    )}

    {onDelete && (
      <ConfirmableButton confirmText="Really?" onClick={() => onDelete(movie)}>
        Delete
      </ConfirmableButton>
    )}

    {children}
  </div>
)
