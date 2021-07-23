import './App.scss'

import db from './db.json'

import {NavBar} from './NavBar'
import {FeaturedMovie} from './FeaturedMovie'
import {Watchlist} from './Watchlist'
import {AllMovies} from './AllMovies'

const movies = db.movies
const featuredMovie = movies[0]

const watchlistMovies = movies.filter((movie) => movie.watchlist)

export const App = () => (<div className="App">
  <NavBar/>
  <FeaturedMovie featuredMovie={featuredMovie}/>
  <Watchlist watchlistMovies={watchlistMovies} />
  <AllMovies allMovies={movies} />
</div>)
