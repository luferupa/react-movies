import { Center, Container } from "native-base"
import { useState } from "react"
import FormMovies from "../forms/FormMovies"
import Loading from "../layout/Loading"
import MoviesList from "../lists/MoviesList"
import { getMoviesByFilter } from "../services/moviesApi"

const MoviesContainer = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [movies, setMovies] = useState([])
    const [filter, setFilter] = useState('popular')

    const fetchMovies = filterValue => {
        setIsLoading(true)
        //console.log('fetching by: ', filterValue)
        getMoviesByFilter(filterValue).then(
            movies => {
                setMovies(movies)
                setIsLoading(false)
            },
            error => {
                alert('Error', `Something went wrong: ${error}`)
            }
        )
    }

    //console.log('filter: ', filter)
    //console.log('myMovies', movies)

    return (
        <Container>
            <Center px={4}>
                <FormMovies filter={filter} setFilter={setFilter} fetchMovies={fetchMovies} />
                {isLoading ? <Loading/> : <MoviesList movies={movies} navigation={navigation} />}
            </Center>
        </Container>
    )
}

export default MoviesContainer