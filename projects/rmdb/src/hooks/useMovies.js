import {useState, useEffect} from 'react'
import axios from 'axios'

export const useMovies = () => {
  const [allMovies, setAllMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      // load all Movies
      const {data} = await axios.get('http://localhost:3001/movies')
      setAllMovies(data)
      setLoading(false)
      // return () => {
      //   // clear out the old data
      // }
    })()
  }, [])

  // add new movie to all Movies
  const addMovie = async (movie) => {
    // for add new movie,  use returned data with "id" to save into state
    const {data} = await axios.post('http://localhost:3001/movies', movie)

    setAllMovies(
      allMovies.find(m => m.imdbID === movie.imdbID) ? allMovies : [...allMovies, data]
    )
  }

  const updateMovie = async (updatedMovie) => {
    // import {assoc, assocPath} from 'ramda'
    // setAllMovies(assocPath([???], updatedMovie, allMovies))

    await axios.put(
      `http://localhost:3001/movies/${updatedMovie.id}`,
      updatedMovie
    )

    setAllMovies(allMovies.map( // map is also immutable, just verbose, but no need for index
      (oneMovie) => (oneMovie.imdbID === updatedMovie.imdbID ? updatedMovie : oneMovie)

    ))
  }

  const deleteMovie = async (deletedMovie) => {
    await axios.delete(`http://localhost:3001/movies/${deletedMovie.id}`)
    setAllMovies(allMovies.filter(
      oneMovie => oneMovie.imdbID !== deletedMovie.imdbID
    ))
  }

  return {allMovies, loading, addMovie, updateMovie, deleteMovie}
}
