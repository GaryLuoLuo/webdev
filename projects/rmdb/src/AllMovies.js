import {MovieListSection} from './MovieListSection'


export const AllMovies = ({allMovies, addMovieToWatchlist}) => (
    <MovieListSection
        title="All Movies"
        subtitle="Discover something new."
        movies={allMovies}
        filterable
        addMovieToWatchlist={addMovieToWatchlist} />

)
