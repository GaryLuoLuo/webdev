

import {MoviePoster} from './MoviePoster'


 const [month, date, year] = new Date().toLocaleDateString('en-US').split('/')


export const FeaturedMovie = ({featuredMovie}) => (
  <section>
    <h2>Featured for {month}/{date}/{year}</h2>
    <MoviePoster poster={featuredMovie.Poster}/>
    <p>{featuredMovie.Title}</p>
    <p>{featuredMovie.imdbRating}</p>
  </section>
)
