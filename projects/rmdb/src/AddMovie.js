
import {useState} from 'react'

import {MovieEdit} from './MovieEdit'
import {Section} from './Section'

export const AddMovie = ({onSave}) => {

  const [showNew, setShowNew] = useState(false)

  const handleClose = () => {
    setShowNew(false)
  }

  // const handleSave= (movie) => {
  //   onSave(movie)
  //   setShowNew(false)
  // }

  const handleSave = async (movie) => {
    await onSave(movie)
    setShowNew(false)
  }
  
  return (
    <Section title="Add Movie" subtitle="Save a movie that's missing?">
      {showNew ? (
        <MovieEdit onClose={handleClose} onSave={handleSave} movie={{}}/>
      ) : (
        <button onClick={() => setShowNew(true)}>Add Movie</button>
      )
      }
    </Section>
  )

}
