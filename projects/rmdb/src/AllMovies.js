import {MovieListSection} from './MovieListSection'
import {useState} from 'react'

export const AllMovies = ({allMovies, addMovieToWatchlist, onEdit, onDelete}) => {

  const [filterType, setFilterType] = useState(null)
  const filteredMovies = filterType === null ? allMovies :
                                               allMovies.filter(movie => movie.Type === filterType)

  return (
    <MovieListSection
      title="All Movies"
      subtitle="Discover something new."
      movies={filteredMovies}
      addMovieToWatchlist={addMovieToWatchlist}
      onEdit={onEdit}
      onDelete={onDelete}>

      <button onClick={() => setFilterType('series')}>TV Series</button>
      <button onClick={() => setFilterType('movie')}>Movies</button>
      <button onClick={() => setFilterType(null)}>All</button>

    </MovieListSection>

  )

}
