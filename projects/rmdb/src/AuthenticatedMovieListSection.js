import {MovieListSection} from './MovieListSection'
import {Section} from './Section'
import {AuthContext} from './contexts/auth'
import {useContext} from 'react'
export const AuthenticatedMovieListSection = ({movies, title, subtitle, onRemove, children}) => {

  const {user} = useContext(AuthContext)

  return (
    <div>
      {user ? (<MovieListSection
                          title={title}
                          subtitle={subtitle}
                          movies={movies}
                          onDelete={onRemove} >
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
