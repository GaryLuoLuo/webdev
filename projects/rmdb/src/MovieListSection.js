import {useState} from 'react'
import {MovieList} from './MovieList'
import {Section} from './Section'

export const MovieListSection = ({movies, title, subtitle, filterable, addMovieToWatchlist}) => {

  const [filterType, setFilterType] = useState(null)
  const filteredMovies = filterType === null ? movies : movies.filter((movie) => movie.Type === filterType)
  return (<Section title={title} subtitle={subtitle}>

  {
    filterable && (<div>
      <button id="series" onClick={() => setFilterType('series')}>TV Series</button>
      <button id="movie" onClick={() => setFilterType('movie')}>Movies</button>
      <button id="all" onClick={() => setFilterType(null)}>All</button>

    </div>)
  }

  <MovieList movies={filteredMovies} addMovieToWatchlist={addMovieToWatchlist}/>

</Section>)
}
