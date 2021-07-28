import './App.scss'

import db from './db.json'

import {NavBar} from './NavBar'
import {FeaturedMovie} from './FeaturedMovie'
import {Watchlist} from './Watchlist'
import {AllMovies} from './AllMovies'
import {LearnMore} from './LearnMore'

import {AddMovie} from './AddMovie'

import {useState} from 'react'

const movies = db.movies
const featuredMovie = movies[0]

export const App = () => {

  const [allMovies, setAllMovies] = useState(db.movies)

  const [watchlistMovies, setWatchlistMovies] = useState(allMovies.filter((movie) => movie.watchlist))

  const addMovieToWatchlist = (movie) => {
    setWatchlistMovies(
      watchlistMovies.includes(movie) ? watchlistMovies : [...watchlistMovies, movie])
      // watchlistMovies.find( m => m === movie)
  }

  // add new movie to all Movies
  const handleAddNewMovie = (movie) => {

    setAllMovies(
      allMovies.find(m => m.imdbID === movie.imdbID) ? allMovies : [...allMovies, movie]
    )
  }

  return   (<div className="App">
    <NavBar/>
    <FeaturedMovie featuredMovie={featuredMovie}/>
    <Watchlist watchlistMovies={watchlistMovies} />
    <AllMovies allMovies={allMovies} addMovieToWatchlist={addMovieToWatchlist}/>
    <LearnMore />
    <AddMovie onAddNewMovie={handleAddNewMovie}/>
    </div>)

}
