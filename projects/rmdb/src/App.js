import './App.scss'
import {useMovies} from './hooks/useMovies'
import {useUser} from './hooks/useUser'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import {Home} from './Home'
import {Detail} from './Detail'
import {NavBar} from './NavBar'
import {AuthContext} from './contexts/auth'

export const App = () => {
  // {allMovies, loading, addMovie, updateMovie, deleteMovie}
  const moviesState = useMovies()
  const userState = useUser()

  return   (
      <Router>
        <div className="App">
          <AuthContext.Provider value={userState}>

            <NavBar/>

            <Switch>
              <Route path="/movies/:imdbID">
                <Detail moviesState={moviesState}/>
              </Route>

              <Route path="/" exact>
                <Home moviesState={moviesState}/>
              </Route>
            </Switch>

          </AuthContext.Provider>
        </div>
      </Router>
  )

}

// const LocationDebug = () => {
//   const location = useLocation()
//   return (
//     <JSONPretty data={location} />
//   )
// }
