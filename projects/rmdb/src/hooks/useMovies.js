import {useState, useEffect} from 'react'
import axios from 'axios'
import {useList} from './useList'

const apiKey = '5593d6a3'

export const useMovies = () => {
  const [loading, setLoading] = useState(true)
  const {data: allMovies, add, update, set, remove} = useList([])

  useEffect(() => {
    (async () => {
      // load all Movies
      const {data} = await axios.get('http://localhost:3001/movies')
      set(data)
      setLoading(false)
      // return () => {
      //   // clear out the old data
      // }
    })()
  }, [set])

  // add new movie to all Movies
  const addMovie = async (movie) => {
    // for add new movie,  use returned data with "id" to save into state
    const {data} = await axios.post('http://localhost:3001/movies', movie)

    add(data)
  }

  const updateMovie = async (updatedMovie) => {
    // import {assoc, assocPath} from 'ramda'
    // setAllMovies(assocPath([???], updatedMovie, allMovies))

    await axios.put(
      `http://localhost:3001/movies/${updatedMovie.id}`,
      updatedMovie
    )

    update(updatedMovie)
  }

  const deleteMovie = async (deletedMovie) => {
    await axios.delete(`http://localhost:3001/movies/${deletedMovie.id}`)
    remove(deletedMovie)
  }

  const updateMovieFromOMDb = async (movie) => {
    // ignore if no movie or we already have expanded version
    if (!movie || movie.Plot) return
    const {data} = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`)
    await updateMovie({...movie, ...data})
  }

  return {allMovies, loading, addMovie, updateMovie, deleteMovie, updateMovieFromOMDb}
}
