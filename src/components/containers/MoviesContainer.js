import { Center, Container } from "native-base"
import { useState, useEffect } from "react"
import FormMovies from "../forms/FormMovies"
import Loading from "../layout/Loading"
import ResultsList from "../lists/ResultsList"
import { getResultsByFilter } from "../services/moviesApi"

const MoviesContainer = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [movies, setMovies] = useState([])
    const [filter, setFilter] = useState('popular')

    const fetchMovies = filterValue => {
        setIsLoading(true)

        getResultsByFilter(`/movie/${filterValue}`).then(
            movies => {
                setMovies(movies)
                setIsLoading(false)
            },
            error => {
                alert('Error', `Something went wrong: ${error}`)
            }
        )
    }

    useEffect(() => {
        fetchMovies(filter)
    }, [])

    return (
            <Container  width='100%' marginX='10' centerContent >
                <Center>
                    <FormMovies filter={filter} setFilter={setFilter} fetchMovies={fetchMovies} />
                    {isLoading ? <Loading/> : <ResultsList results={movies} navigation={navigation} />}
                </Center>
            </Container>
    )
}

export default MoviesContainer