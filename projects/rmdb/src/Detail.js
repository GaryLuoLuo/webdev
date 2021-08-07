import {MovieDetail} from './MovieDetail'
import {useParams} from 'react-router-dom'

export const Detail = ({moviesState, userState}) => {

  const {allMovies, loading, addMovie, updateMovie, deleteMovie} = moviesState

  const { imdbID } = useParams()

  const movie = allMovies.find( m => m.imdbID === imdbID)

  return (
    <div className="Detail">
      {loading ? (
        <p>Loading...</p>
      ) : (
        movie ? (
          <MovieDetail movie={movie}/>
        ) : (
          <h2>404 Movie Not Found</h2>
        )
      )}
    </div>
  )
}
