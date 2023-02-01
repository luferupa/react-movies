import { Box, Center, Container, Text } from "native-base"
import { useState, useEffect } from "react"
import SearchForm from "../forms/SearchForm"
import Loading from "../layout/Loading"
import ResultsList from "../lists/ResultsList"
import { getResultsOfSearch } from "../services/moviesApi"

const SearchContainer = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState([])
    const [filter, setFilter] = useState('movie')
    const [showName, setShowName] = useState('')

    const fetchResults = () => {
        setIsLoading(true)

        getResultsOfSearch(`/search/${filter}`, showName).then(
            results => {
                setResults(results)
                setIsLoading(false)
            },
            error => {
                alert('Error', `Something went wrong: ${error}`)
            }
        )
    }


    return ( 
        <Container width='100%' marginX='10' centerContent>
            <Center>
                <SearchForm filter={filter} setFilter={setFilter} fetchResults={fetchResults} setShowName={setShowName} showName={showName} />
                
                {isLoading ? <Loading/> 
                : results.length > 0 ? 
                    <ResultsList results={results} navigation={navigation} isSearch={true}/>
                    : <Box><Center><Text mt={20} fontSize={25} fontWeight='bold' width='100%'>Please initiate a search</Text></Center></Box>
                }
            </Center>
        </Container>
        
    )
}

export default SearchContainer