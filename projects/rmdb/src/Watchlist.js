import {AuthenticatedMovieListSection} from './AuthenticatedMovieListSection'
import {Section} from './Section'
import {useState} from 'react'

export const Watchlist = ({watchlistMovies, user}) => {

  const [filterDecade, setFilterDecade] = useState(null)
  const filteredMovies =
                filterDecade === null ? watchlistMovies :
                                        watchlistMovies.filter((movie) => movie.Year.substring(0,3) === filterDecade.substring(0, 3))


  return (
    <AuthenticatedMovieListSection
      title="Watchlist"
      subtitle="Dive into your favorites!"
      movies={filteredMovies}
      user={user}>

      <button onClick={() => setFilterDecade('2020')}>2020s</button>
      <button onClick={() => setFilterDecade('2010')}>2010s</button>
      <button onClick={() => setFilterDecade('2000')}>2000s</button>
      <button onClick={() => setFilterDecade(null)}>All</button>
    </AuthenticatedMovieListSection>

  )

}
