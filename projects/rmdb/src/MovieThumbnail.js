import {MoviePoster} from './MoviePoster'
import './MovieThumbnail.scss'

export const MovieThumbnail = ({movie}) => (
  <div className="MovieThumbnail">
    <MoviePoster poster={movie.Poster} />
    {movie.Title}
  </div>
)
