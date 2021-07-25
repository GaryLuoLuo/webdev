import {MoviePoster} from './MoviePoster'
import './MovieThumbnail.scss'

export const MovieThumbnail = ({movie, addMovieToWatchlist}) => (
  <div className="MovieThumbnail">
    <MoviePoster poster={movie.Poster} />
    {movie.Title}
    {addMovieToWatchlist && (<button onClick={() => addMovieToWatchlist(movie)} >+</button>)}
  </div>
)
