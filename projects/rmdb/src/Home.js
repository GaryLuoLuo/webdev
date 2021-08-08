
import {FeaturedMovie} from './FeaturedMovie'
import {Watchlist} from './Watchlist'
import {AllMovies} from './AllMovies'
import {LearnMore} from './LearnMore'
import {AddMovie} from './AddMovie'
import {MovieEdit} from './MovieEdit'
import {useState} from 'react'

export const Home = ({moviesState}) => {

  const {allMovies, loading, addMovie, updateMovie, deleteMovie} = moviesState

  const featuredMovie = allMovies[0]

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
    <div className="Home">
      {loading ? (<p>Loading...</p>) :
      (
        <div>
          <FeaturedMovie featuredMovie={featuredMovie}/>
          <Watchlist allMovies={allMovies} onRemove={handleRemoveWatchlist}/>
          <AllMovies allMovies={allMovies}
                    addMovieToWatchlist={handleAddWatchlist}
                    onEdit={(movie) => setEditingMovie(movie)}
                    onDelete={handleDelete}/>
          <LearnMore />
          <AddMovie onSave={addMovie}/>

          {editingMovie && (<MovieEdit movie={editingMovie}
                                        onClose={() => setEditingMovie(null)}
                                        onSave={handleSaveForEdit}/>)}
        </div>
      )}
    </div>)
}
