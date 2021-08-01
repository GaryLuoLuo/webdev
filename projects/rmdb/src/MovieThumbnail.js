import {MoviePoster} from './MoviePoster'
import './MovieThumbnail.scss'
import {ConfirmableButton } from './ConfirmableButton'

export const MovieThumbnail = ({movie, addMovieToWatchlist, onEdit, onDelete}) => (
  <div className="MovieThumbnail">
    <MoviePoster poster={movie.Poster} />
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
  </div>
)
