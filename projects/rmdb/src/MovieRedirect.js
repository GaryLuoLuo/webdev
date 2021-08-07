import {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'


export const MovieRedirect = () => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true)
      // console.log("ticking")
    }, 3000)

    // runs on unmounting <MovieRedirect/>
    return () => {
      clearTimeout(timer)
    }
  })

  return (
    ready ? (
      <Redirect to={{
        pathname: '/',
        state: {flash: 'Redirected from here'}
      }}/>
    ) : (
      <h2>404 Movie Not Found</h2>
    )

  )
}
