import {MoviePoster} from './MoviePoster'
import './MovieThumbnail.scss'

export const MovieThumbnail = ({movie, addMovieToWatchlist, onClickEditMovie}) => (
  <div className="MovieThumbnail">
    <MoviePoster poster={movie.Poster} />
    {movie.Title}
    {addMovieToWatchlist && (<button className="addMovieToWatchlist" onClick={() => addMovieToWatchlist(movie)} >+</button>)}

    {onClickEditMovie && (
      <button type="button" onClick={() => onClickEditMovie(movie)}>Edit</button>
    )}
  </div>
)
