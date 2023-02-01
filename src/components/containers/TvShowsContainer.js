import { Center, Container } from "native-base"
import { useEffect, useState } from "react"
import FormTvShows from "../forms/FormTvShows"
import Loading from "../layout/Loading"
import ResultsList from "../lists/ResultsList"
import { getResultsByFilter } from "../services/moviesApi"

const TvShowsContainer = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [tvShows, setTvShows] = useState([])
    const [filter, setFilter] = useState('popular')

    const fetchTvShows = filterValue => {
        setIsLoading(true)

        getResultsByFilter(`/tv/${filterValue}`).then(
            tvShows => {
                setTvShows(tvShows)
                setIsLoading(false)
            },
            error => {
                alert('Error', `Something went wrong: ${error}`)
            }
        )
    }

    useEffect(() => {
        fetchTvShows(filter)
    }, [])


    return (
        <Container width='100%' marginX='10' centerContent>
            <Center>
                <FormTvShows filter={filter} setFilter={setFilter} fetchTvShows={fetchTvShows} />
                {isLoading ? <Loading/> : <ResultsList results={tvShows} navigation={navigation} />}
            </Center>
        </Container>
    )
}

export default TvShowsContainer