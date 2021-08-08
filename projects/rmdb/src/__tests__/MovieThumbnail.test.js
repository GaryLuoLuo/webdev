import { MovieThumbnail } from '../MovieThumbnail'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import {nanoid} from 'nanoid'
import userEvent from '@testing-library/user-event'
import {newMovie} from '../factories'

describe('MovieThumbnail', () => {
  // here you should test that the movie information is displayed,
  // and the link will point to /movies/[id]
  it('should render movie information and link to the movie', () => {
    const movie = newMovie()
    render(
      <MemoryRouter>
        <MovieThumbnail movie={movie} />
      </MemoryRouter>,
    )
    expect(screen.getByText('Movie Title')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', `/movies/${movie.imdbID}`)
    expect(screen.getByAltText('for a11y screen reader')).toHaveAttribute('src', movie.Poster)
  })

  it('should render children', () => {
    // here you should test that children you pass in will be rendered.
    const movie=newMovie()
    render (
      <MemoryRouter>
        <MovieThumbnail movie={movie}>
          <p>Hello World</p>
        </MovieThumbnail>
      </MemoryRouter>
    )
    expect(screen.getByText("Hello World")).toBeInTheDocument()
  })

  it('should render buttons and pass movie back', async () => {
    // here, you should test behavior of onAdd, onEdit, onDelete
    // and make sure they run when their corresponding buttons are clicked.
    const movie = newMovie()
    const onAdd = jest.fn()
    const onEdit = jest.fn()
    const onRemove = jest.fn()
    render(
      <MemoryRouter>
        <MovieThumbnail movie={movie} addMovieToWatchlist={onAdd} onEdit={onEdit} onDelete={onRemove}/>
      </MemoryRouter>
    )

    expect(onAdd).not.toHaveBeenCalledWith(movie)
    expect(onEdit).not.toHaveBeenCalledWith(movie)
    expect(onRemove).not.toHaveBeenCalledWith(movie)

    userEvent.click(screen.getByText("+"))
    expect(onAdd).toHaveBeenCalledWith(movie)
    userEvent.click(screen.getByText('Edit'))
    expect(onEdit).toHaveBeenCalledWith(movie)
    await userEvent.click(screen.getByText('Delete'))
    userEvent.click(screen.getByText('Really?'))
    expect(onRemove).toHaveBeenCalledWith(movie)

  })
})
