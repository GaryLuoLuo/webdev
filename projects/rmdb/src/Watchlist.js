import {AuthenticatedMovieListSection} from './AuthenticatedMovieListSection'
import {useState} from 'react'

export const Watchlist = ({allMovies, onRemove}) => {

  const [filterDecade, setFilterDecade] = useState(null)

  const watchlistMovies = allMovies.filter((movie) => movie.watchlist)

  const filteredMovies =
                filterDecade === null ? watchlistMovies :
                                        watchlistMovies.filter((movie) => movie.Year.substring(0,3) === filterDecade.substring(0, 3))


  return (
    <AuthenticatedMovieListSection
      title="Watchlist"
      subtitle="Dive into your favorites!"
      movies={filteredMovies}
      onRemove={onRemove}>

      <button onClick={() => setFilterDecade('2020')}>2020s</button>
      <button onClick={() => setFilterDecade('2010')}>2010s</button>
      <button onClick={() => setFilterDecade('2000')}>2000s</button>
      <button onClick={() => setFilterDecade(null)}>All</button>
    </AuthenticatedMovieListSection>

  )

}
