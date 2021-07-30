import {MoviePoster} from './MoviePoster'
import './MovieThumbnail.scss'
import {ConfirmableButton } from './ConfirmableButton'

export const MovieThumbnail = ({movie, addMovieToWatchlist, onClickEditMovie, onClickDelete}) => (
  <div className="MovieThumbnail">
    <MoviePoster poster={movie.Poster} />
    {movie.Title}
    {addMovieToWatchlist && (<button className="addMovieToWatchlist" onClick={() => addMovieToWatchlist(movie)} >+</button>)}

    {onClickEditMovie && (
      <button type="button" onClick={() => onClickEditMovie(movie)}>Edit</button>
    )}

    {onClickDelete && (
      <ConfirmableButton confirmText="Really?" onClick={() => onClickDelete(movie)}>
        Delete
      </ConfirmableButton>
    )}
  </div>
)
