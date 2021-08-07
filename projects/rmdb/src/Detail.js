import {MovieDetail} from './MovieDetail'
import {useParams} from 'react-router-dom'
import {MovieRedirect} from './MovieRedirect'

import {useEffect} from 'react'

export const Detail = ({moviesState, userState}) => {

  const {allMovies, loading, addMovie, updateMovie, deleteMovie, updateMovieFromOMDb} = moviesState

  const { imdbID } = useParams()

  const movie = allMovies.find( m => m.imdbID === imdbID)


  useEffect(() => {
    updateMovieFromOMDb(movie)
  }, [movie]) // eslint-disable-line react-hooks/exhaustive-deps

  // either of this is ok, since movie won't change on detail page
  // updateMovieFromOMDb(movie)

  return (
    <div className="Detail">
      {loading ? (
        <p>Loading...</p>
      ) : (
        movie ? (
          <MovieDetail movie={movie}/>
        ) : (
          <MovieRedirect />
        )
      )}
    </div>
  )
}
