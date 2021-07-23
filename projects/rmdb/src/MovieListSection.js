import {useState} from 'react'
import {MovieList} from './MovieList'

export const MovieListSection = ({movies, title, filterable}) => {

  const [filterType, setFilterType] = useState(null)
  const filteredMovies = filterType === null ? movies : movies.filter((movie) => movie.Type === filterType)
  return (
    <section>
      <h3>{title}</h3>
      {filterable && (
        <div>
          <button id="series" onClick={() => setFilterType('series')}>TV Series</button>
          <button id="movie" onClick={() => setFilterType('movie')}>Movies</button>
          <button id="all" onClick={() => setFilterType(null)}>All</button>

        </div>
        
      )}

      <MovieList movies={filteredMovies} />

    </section>

  )
}
