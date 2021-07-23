import {MovieList} from './MovieList'

export const Watchlist = ({watchlistMovies}) => (<section>
  <h2>Watchlist</h2>
  <MovieList movies={watchlistMovies}/>

</section>)
