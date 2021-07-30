
import {useState} from 'react'
import './MovieEdit.scss'

import {MoviePoster} from './MoviePoster'

const MAX_YEAR = new Date().getFullYear()
const emptyMovie = {
  Title: "",
  Year: "",
  Type: null,
  Poster: "",
  imdbID: "",
  imdbRating: ""
}

export const MovieEdit = ({movie=emptyMovie, setShowMovieEdit, onSave}) => {

  const [title, setTitle] = useState(movie.Title)
  const [year, setYear] = useState(movie.Year)
  const [type, setType] = useState(movie.Type)
  const [poster, setPoster] = useState(movie.Poster)
  const [imdbID, setImdbID] = useState(movie.imdbID)
  const [imdbRating, setImdbRating] = useState(movie.imdbRating)

  const [showPreview, setShowPreview] = useState(false)

  const emptyForm = () => {
    setTitle('')
    setYear('')
    setType('movie')
    setPoster('')
    setImdbID('')
    setImdbRating('')
  }

  const handleCancel = () => {
    setShowMovieEdit(null)
    emptyForm()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMovie = {
      ...movie,
      "Title": title,
      "Year": year,
      "imdbID": imdbID,
      "Type": type,
      "Poster": poster,
      "imdbRating": imdbRating
    }
    onSave(newMovie)
    emptyForm()
  }

  const handlePreview = () => {
    setShowPreview(!showPreview)
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input id="title" required type="text" value={title} onChange={e => setTitle(e.target.value)}/>

        <label>Year</label>
        <input type="number" required value={year} onChange={e => setYear(e.target.value)} min={1900} max={MAX_YEAR}/>

        <label>Type</label>
        <div>
          <input id="movie" type="radio" value="movie" onChange={e => setType(e.target.value)} checked={type === "movie"} />
          <label htmlFor="movie" className="radio-label">Movie</label>
          <input id="series" type="radio" value="series" onChange={e => setType(e.target.value)} checked={type === "series"} />
          <label htmlFor="series" className="radio-label">Series</label>
        </div>

        <label>Poster</label>
        <input type="url" required value={poster} onChange={e => setPoster(e.target.value)} />
        <button type="button" onClick={handlePreview}>Preview</button>
        {showPreview && (<MoviePoster poster={poster}/>)}

        <label>imdbID</label>
        <input type="text" required value={imdbID} onChange={e => setImdbID(e.target.value)} />

        <label>imdbRating</label>
        <input type="number" value={imdbRating} onChange={e => setImdbRating(e.target.value)} step={0.1}/>

        <div className="AddMovieButton">
          <button type="button" onClick={handleCancel}>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </div>
    </form>
  )
}

// export const withInputChange = (setter) => e => setter(e.target.value)
// onChange={withInputChange(setUsername)
