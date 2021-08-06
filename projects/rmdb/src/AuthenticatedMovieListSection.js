import {MovieListSection} from './MovieListSection'
import {Section} from './Section'

export const AuthenticatedMovieListSection = ({movies, title, subtitle, user, onRemove, children}) => {


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
