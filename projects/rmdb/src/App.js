import './App.scss'

import {NavBar} from './NavBar'
import {FeaturedMovie} from './FeaturedMovie'
import {Watchlist} from './Watchlist'
import {AllMovies} from './AllMovies'
import {LearnMore} from './LearnMore'

import {AddMovie} from './AddMovie'
import {MovieEdit} from './MovieEdit'

import {useState, useEffect} from 'react'

import axios from 'axios'


export const App = () => {

  const [allMovies, setAllMovies] = useState([])
  const featuredMovie = allMovies[0]

  const [watchlistMovies, setWatchlistMovies] = useState([])

  const [user, setUser] = useState(null)

  const [editingMovie, setEditingMovie] = useState(null) // state of movie being edited, null, movie1,...

  useEffect(() => {
    (async () => {
      // load all Movies
      const {data} = await axios.get('http://localhost:3001/movies')
      setAllMovies(data)
      // return () => {
      //   // clear out the old data
      // }
    })()
  }, [])

  useEffect(() => {
    setWatchlistMovies(allMovies.filter((movie) => movie.watchlist))
  }, [allMovies])


  const addMovieToWatchlist = (movie) => {
    setWatchlistMovies(
      watchlistMovies.find(m => m.imdbID === movie.imdbID) ? watchlistMovies : [...watchlistMovies, movie])
      // watchlistMovies.find( m => m === movie)
  }

  // add new movie to all Movies
  const handleAddNewMovie = async (movie) => {
    // for add new movie,  use returned data with "id" to save into state
    const {data} = await axios.post('http://localhost:3001/movies', movie)

    setAllMovies(
      allMovies.find(m => m.imdbID === movie.imdbID) ? allMovies : [...allMovies, data]
    )
  }

  const handleSaveForEdit = async (updatedMovie) => {
    // import {assoc, assocPath} from 'ramda'
    // setAllMovies(assocPath([???], updatedMovie, allMovies))

    await axios.put(
      `http://localhost:3001/movies/${updatedMovie.id}`,
       updatedMovie
     )

    setAllMovies(allMovies.map( // map is also immutable, just verbose, but no need for index
      (oneMovie) => (oneMovie.imdbID === updatedMovie.imdbID ? updatedMovie : oneMovie)

    ))

    setWatchlistMovies(watchlistMovies.map(
      oneMovie => (oneMovie.imdbID === updatedMovie.imdbID ? updatedMovie : oneMovie)
    ))

    setEditingMovie(null)
  }

  const handleDelete = async (deletedMovie) => {
    await axios.delete(`http://localhost:3001/movies/${deletedMovie.id}`)
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
                  onEdit={(movie) => setEditingMovie(movie)}
                  onDelete={handleDelete}/>
        {editingMovie && (<MovieEdit movie={editingMovie}
                                      onClose={() => setEditingMovie(null)}
                                      onSave={handleSaveForEdit}/>)}
        <LearnMore />
        <AddMovie onSave={handleAddNewMovie}/>
    </div>)

}
