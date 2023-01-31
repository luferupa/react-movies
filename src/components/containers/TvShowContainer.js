import { Box, Center, Heading, Image, Text } from "native-base"
import { useState } from "react"
import { IMAGES_URL } from "../config/api_config"
import { getResultsByFilter } from "../services/moviesApi"

const TvShowContainer = ({ navigation , route }) => {

    const { title, id } = route.params

    const [overview, setOverview] = useState()
    const [image, setImage] = useState()
    const [popularity, setPopularity] = useState()
    const [releaseDate, setReleaseDate] = useState()
    
        //console.log('fetching by: ', movieId)
       getResultsByFilter(`/tv/${id}`).then(
            tvShow => {
                setOverview(tvShow.overview)
                setImage(`${IMAGES_URL}${tvShow.poster_path}`)
                setPopularity(tvShow.popularity)
                setReleaseDate(tvShow.first_air_date)
            },
            error => {
                alert('Error', `Something went wrong: ${error}`)
            }
        )

        return (

            <Box width='100%'>
                <Center py={10}>
                    <Heading>{title}</Heading>
                </Center>
                <Box px={4} pb={6}>
                    <Center>
                        <Image alt={title} source={{ uri: image }} size={'2xl'}/>
                    </Center>
                </Box>
                <Box px={12} pb={6}>
                    <Text>{overview}</Text>
                </Box>
                <Box px={12} pb={6}>
                    <Text fontSize={12}>Popularity: {popularity} | Release Date: {releaseDate}</Text>
                </Box>
            </Box>
    
        )

    
}

export default TvShowContainer