
import {useState} from 'react'

import {AddMovieForm} from './AddMovieForm'
import {Section} from './Section'

export const AddMovie = ({onAddNewMovie}) => {

  const [showAddMovie, setShowAddMovie] = useState(false)
  return (
    <Section title="Add Movie" subtitle="Save a movie that's missing?">
      {showAddMovie ? <AddMovieForm setShowAddMovie={setShowAddMovie} onAddNewMovie={onAddNewMovie}/> :
                      <button onClick={() => setShowAddMovie(true)}>Add Movie</button>}
    </Section>
  )

}
