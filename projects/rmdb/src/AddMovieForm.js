
import {useState} from 'react'
import './AddMovieForm.scss'

export const AddMovieForm = ({setShowAddMovie, onAddNewMovie}) => {

  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [type, setType] = useState('movie')
  const [poster, setPoster] = useState('')
  const [imdbID, setImdbID] = useState('')
  const [imdbRating, setImdbRating] = useState('')

  const emptyForm = () => {
    setTitle('')
    setYear('')
    setType('movie')
    setPoster('')
    setImdbID('')
    setImdbRating('')
  }

  const handleCancel = () => {
    setShowAddMovie(false)
    emptyForm()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMovie = {
      "Title": title,
      "Year": year,
      "imdbID": imdbID,
      "Type": type,
      "Poster": poster,
      "watchlist": false,
      "imdbRating": imdbRating
    }
    onAddNewMovie(newMovie)
    emptyForm()
  }
  return (
    <div className="AddMovieForm" onSubmit={handleSubmit}>
      <form >
        <label htmlFor="title">Title</label>
        <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)}/>

        Year
        <input type="number" value={year} onChange={e => setYear(e.target.value)} min={1900} max={2100}/>

        Type
        <div>
          <input id="movie" type="radio" value="movie" onChange={e => setType(e.target.value)} checked={type === "movie"} />
          <label htmlFor="movie">Movie</label>
          <input id="series" type="radio" value="series" onChange={e => setType(e.target.value)} checked={type === "series"} />
          <label htmlFor="series">Series</label>
        </div>

        Poster
        <input type="url" value={poster} onChange={e => setPoster(e.target.value)} />

        imdbID
        <input type="text" value={imdbID} onChange={e => setImdbID(e.target.value)} />

        imdbRating
        <input type="number" value={imdbRating} onChange={e => setImdbRating(e.target.value)} step={0.1}/>

        <div className="AddMovieButton">
          <button type="button" onClick={handleCancel}>Cancel</button>
          <button type="submit">Add</button>
        </div>
      </form>

    </div>
  )
}
