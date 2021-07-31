
import {useState} from 'react'
import './MovieEdit.scss'

import {MoviePoster} from './MoviePoster'

import {Button,
        TextField,
        Dialog,
        DialogActions,
        DialogContent,
        DialogContentText,
        DialogTitle,
        Radio,
        RadioGroup,
        FormControlLabel,
        FormControl,
        FormLabel,
      } from '@material-ui/core'

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

  // const emptyForm = () => {
  //   setTitle('')
  //   setYear('')
  //   setType('movie')
  //   setPoster('')
  //   setImdbID('')
  //   setImdbRating('')
  // }

  const handleCancel = () => {
    setShowMovieEdit(null)
    // emptyForm()
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
    // emptyForm()
    setShowMovieEdit(null)
  }

  const handlePreview = () => {
    setShowPreview(!showPreview)
  }

  const handlePosterChange = (e) => {
    setPoster(e.target.value)
    setShowPreview(false)
  }


  return (

    <div>
      <Dialog open={true} onClose={handleCancel} aria-labelledby="form-dialog-title">

        <form onSubmit={handleSubmit}>
          <DialogTitle>Add or Edit Movie</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add or edit a movie, please enter or update all the information and click save button.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              required
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <TextField
              id="year"
              label="Year"
              type="number"
              margin="dense"
              fullWidth
              required
              value={year}
              onChange={e => setYear(e.target.value)}
              min={1900}
              max={MAX_YEAR}
            />
            <FormControl component="fieldset" fullWidth >
              <FormLabel component="legend">Type</FormLabel>
              <RadioGroup
                  row
                  aria-label="type"
                  name="type"
                  value={type}
                  onChange={e => setType(e.target.value)}>
                <FormControlLabel value="movie" control={<Radio />} label="Movie" />
                <FormControlLabel value="series" control={<Radio />} label="Series" />
              </RadioGroup>
            </FormControl>

            <TextField
              id="poster"
              label="Poster"
              type="url"
              margin="dense"
              fullWidth
              required
              value={poster}
              onChange={handlePosterChange}
            />
            {!showPreview &&
              (<Button onClick={handlePreview} color="primary">
                Preview
              </Button>)}
            {showPreview && (<MoviePoster poster={poster}/>)}

            <TextField
              id="imdbID"
              label="imdbID"
              type="text"
              margin="dense"
              fullWidth
              required
              value={imdbID}
              onChange={e => setImdbID(e.target.value)}
            />

            <TextField
              id="imdbRating"
              label="imdbRating"
              type="number"
              margin="dense"
              fullWidth
              required
              value={imdbRating}
              onChange={e => setImdbRating(e.target.value)}
              step={0.1}
            />

          </DialogContent>

          <DialogActions>
            <Button onClick={handleCancel} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Save
            </Button>
          </DialogActions>
        </form>

      </Dialog>
    </div>


  )
}

// You can put a <form> inside the Dialog, so required/enter can work

/*
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
*/
