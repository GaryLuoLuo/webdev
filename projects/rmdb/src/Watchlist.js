import {MovieListSection} from './MovieListSection'
import {Section} from './Section'
import {useState} from 'react'

export const Watchlist = ({watchlistMovies}) => {

  const [filterDecade, setFilterDecade] = useState(null)
  const filteredMovies =
                filterDecade === null ? watchlistMovies :
                                        watchlistMovies.filter((movie) => movie.Year.substring(0,3) === filterDecade.substring(0, 3))


  return (
    <MovieListSection
      title="Watchlist"
      subtitle="Dive into your favorites!"
      movies={filteredMovies}>

      <button onClick={() => setFilterDecade('2020')}>2020s</button>
      <button onClick={() => setFilterDecade('2010')}>2010s</button>
      <button onClick={() => setFilterDecade('2000')}>2000s</button>
      <button onClick={() => setFilterDecade(null)}>All</button>
    </MovieListSection>

  )

}
