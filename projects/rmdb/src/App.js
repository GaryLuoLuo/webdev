import './App.scss'

import db from './db.json'

import {NavBar} from './NavBar'
import {FeaturedMovie} from './FeaturedMovie'
import {Watchlist} from './Watchlist'
import {AllMovies} from './AllMovies'
import {LearnMore} from './LearnMore'

import {useState} from 'react'

const movies = db.movies
const featuredMovie = movies[0]

export const App = () => {
  const [watchlistMovies, setWatchlistMovies] = useState(movies.filter((movie) => movie.watchlist))
  const addMovieToWatchlist = (movie) => {
    setWatchlistMovies(
      watchlistMovies.includes(movie) ? watchlistMovies : [...watchlistMovies, movie])
      // watchlistMovies.find( m => m === movie)
  }

  return   (<div className="App">
    <NavBar/>
    <FeaturedMovie featuredMovie={featuredMovie}/>
    <Watchlist watchlistMovies={watchlistMovies} />
    <AllMovies allMovies={movies} addMovieToWatchlist={addMovieToWatchlist}/>
    <LearnMore />
    </div>)

}
