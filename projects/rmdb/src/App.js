import './App.scss'

import {NavBar} from './NavBar'
import {FeaturedMovie} from './FeaturedMovie'
import {Watchlist} from './Watchlist'
import {AllMovies} from './AllMovies'
import {LearnMore} from './LearnMore'

import {AddMovie} from './AddMovie'
import {MovieEdit} from './MovieEdit'

import {useState} from 'react'

import {useMovies} from './hooks/useMovies'

export const App = () => {
  const {allMovies, loading, addMovie, updateMovie, deleteMovie} = useMovies()

  const featuredMovie = allMovies[0]

  const [user, setUser] = useState(null)

  const [editingMovie, setEditingMovie] = useState(null) // state of movie being edited, null, movie1,...

  const handleSaveForEdit = async (updatedMovie) => {
    await updateMovie(updatedMovie)
    setEditingMovie(null)
  }

  const handleDelete = async (deletedMovie) => {
    await deleteMovie(deletedMovie)
  }

  const handleRemoveWatchlist = async (removedMovie) => {
    await updateMovie({...removedMovie, watchlist: false})
  }

  const handleAddWatchlist = async (movie) => {
    await updateMovie({...movie, watchlist: true})
  }

  return   (
    <div className="App">
      {loading ? (<p>Loading...</p>) :
      (
        <div>
          <NavBar user={user} setUser={setUser}/>
          <FeaturedMovie featuredMovie={featuredMovie}/>
          <Watchlist allMovies={allMovies} user={user} onRemove={handleRemoveWatchlist}/>
          <AllMovies allMovies={allMovies}
                    addMovieToWatchlist={handleAddWatchlist}
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
