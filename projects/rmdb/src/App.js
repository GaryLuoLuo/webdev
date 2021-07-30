import './App.scss'

import db from './db.json'

import {NavBar} from './NavBar'
import {FeaturedMovie} from './FeaturedMovie'
import {Watchlist} from './Watchlist'
import {AllMovies} from './AllMovies'
import {LearnMore} from './LearnMore'

import {AddMovie} from './AddMovie'
import {MovieEdit} from './MovieEdit'

import {useState} from 'react'


export const App = () => {

  const [allMovies, setAllMovies] = useState(db.movies)
  const featuredMovie = allMovies[0]

  const [watchlistMovies, setWatchlistMovies] = useState(allMovies.filter((movie) => movie.watchlist))

  const [user, setUser] = useState(null)

  const [editingMovie, setEditingMovie] = useState(null) // state of movie being edited, null, movie1,...

  const addMovieToWatchlist = (movie) => {
    setWatchlistMovies(
      watchlistMovies.find(m => m.imdbID === movie.imdbID) ? watchlistMovies : [...watchlistMovies, movie])
      // watchlistMovies.find( m => m === movie)
  }

  // add new movie to all Movies
  const handleAddNewMovie = (movie) => {

    setAllMovies(
      allMovies.find(m => m.imdbID === movie.imdbID) ? allMovies : [...allMovies, movie]
    )
  }

  const handleClickEditMovie = (movie) => {
    setEditingMovie(movie)
  }

  const handleEditMovieSave = (updatedMovie) => {
    // import {assoc, assocPath} from 'ramda'
    // setAllMovies(assocPath([???], updatedMovie, allMovies))
    setAllMovies(allMovies.map( // map is also immutable, just verbose, but no need for index
      (oneMovie) => (oneMovie.imdbID === updatedMovie.imdbID ? updatedMovie : oneMovie)

    ))

    setWatchlistMovies(watchlistMovies.map(
      oneMovie => (oneMovie.imdbID === updatedMovie.imdbID ? updatedMovie : oneMovie)
    ))

    setEditingMovie(null)
  }

  const hangleClickDelete = (deletedMovie) => {
    setAllMovies(allMovies.filter(
      oneMovie => oneMovie.imdbID !== deletedMovie.imdbID
    ))

    setWatchlistMovies(watchlistMovies.filter(
      oneMovie => oneMovie.imdbID !== deletedMovie.imdbID
    ))
  }

  return   (
    <div className="App">
        <NavBar user={user} setUser={setUser}/>
        <FeaturedMovie featuredMovie={featuredMovie}/>
        <Watchlist watchlistMovies={watchlistMovies} user={user} />
        <AllMovies allMovies={allMovies}
                  addMovieToWatchlist={addMovieToWatchlist}
                  onClickEditMovie={handleClickEditMovie}
                  onClickDelete={hangleClickDelete}/>

        { editingMovie && (
            <MovieEdit movie={editingMovie} setShowMovieEdit={setEditingMovie} onSave={handleEditMovieSave}/>
        )}

        <LearnMore />
        <AddMovie onAddNewMovie={handleAddNewMovie}/>
    </div>)

}
