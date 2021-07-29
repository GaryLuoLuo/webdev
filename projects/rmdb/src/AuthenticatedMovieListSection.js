import {MovieListSection} from './MovieListSection'
import {Section} from './Section'

export const AuthenticatedMovieListSection = ({movies, title, subtitle, user, children}) => {


  return (
    <div>
      {user ? (<MovieListSection title={title} subtitle={subtitle} movies={movies} >
                  {children}
                </MovieListSection>) : (
                  <Section title={title} subtitle={subtitle}>
                    Sign in to access {title}
                  </Section>
                )
      }
    </div>
  )
}
