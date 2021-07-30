
import {useState} from 'react'

import {MovieEdit} from './MovieEdit'
import {Section} from './Section'

export const AddMovie = ({onAddNewMovie}) => {

  const [showAddMovie, setShowAddMovie] = useState(false)
  return (
    <Section title="Add Movie" subtitle="Save a movie that's missing?">
      {showAddMovie ? <MovieEdit setShowMovieEdit={setShowAddMovie} onSave={onAddNewMovie}/> :
                      <button onClick={() => setShowAddMovie(true)}>Add Movie</button>}
    </Section>
  )

}
