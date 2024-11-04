/// this is where i imported the other componant that will be needed to get information 
import MovieItem from "./MovieItem";
// this is a new componat that will display the movies 
const Movies = (props)=> {
    // this is where i want to display my movie and the code by the return is where it has goten the information to be able to do that
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem myMovie={movie} key={movie.imdbID}></MovieItem>
        }

    )
}
// this is where it exports the movie componat
export default Movies;