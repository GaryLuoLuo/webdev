import './App.scss'

import {NavBar} from './NavBar'
import {FeaturedMovie} from './FeaturedMovie'
import {Watchlist} from './Watchlist'
import {AllMovies} from './AllMovies'
import {LearnMore} from './LearnMore'

import {AddMovie} from './AddMovie'
import {MovieEdit} from './MovieEdit'

import {useState, useEffect} from 'react'

import {useMovies} from './hooks/useMovies'

export const App = () => {
  const {allMovies, loading, addMovie, updateMovie, deleteMovie} = useMovies()

  const featuredMovie = allMovies[0]

  const [watchlistMovies, setWatchlistMovies] = useState([])

  const [user, setUser] = useState(null)

  const [editingMovie, setEditingMovie] = useState(null) // state of movie being edited, null, movie1,...

  useEffect(() => {
    setWatchlistMovies(allMovies.filter((movie) => movie.watchlist))
  }, [allMovies])


  const addMovieToWatchlist = (movie) => {
    setWatchlistMovies(
      watchlistMovies.find(m => m.imdbID === movie.imdbID) ? watchlistMovies : [...watchlistMovies, movie])
      // watchlistMovies.find( m => m === movie)
  }

  const handleSaveForEdit = async (updatedMovie) => {
    await updateMovie(updatedMovie)
    setWatchlistMovies(watchlistMovies.map(
      oneMovie => (oneMovie.imdbID === updatedMovie.imdbID ? updatedMovie : oneMovie)
    ))
    setEditingMovie(null)
  }

  const handleDelete = async (deletedMovie) => {
    await deleteMovie(deletedMovie)
    setWatchlistMovies(watchlistMovies.filter(
      oneMovie => oneMovie.imdbID !== deletedMovie.imdbID
    ))
  }


  return   (
    <div className="App">
      {loading ? (<p>Loading...</p>) :
      (
        <div>
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
          <AddMovie onSave={addMovie}/>
        </div>
      )}
    </div>)

}
