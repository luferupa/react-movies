import { Box, Center, Heading, Image, Text } from "native-base"
import { useState } from "react"
import { IMAGES_URL } from "../config/api_config"
import { getResultsByFilter } from "../services/moviesApi"

const AnyShowContainer = ({ navigation , route }) => {

    const { title, id, isMovie } = route.params

    const [overview, setOverview] = useState()
    const [image, setImage] = useState()
    const [popularity, setPopularity] = useState()
    const [releaseDate, setReleaseDate] = useState()
    
    const filter = isMovie? `/movie/${id}` : `/tv/${id}`
       getResultsByFilter(filter).then(
            show => {
                setOverview(show.overview)
                setImage(`${IMAGES_URL}${show.poster_path}`)
                setPopularity(show.popularity)
                setReleaseDate(isMovie? show.release_date : show.first_air_date)
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

export default AnyShowContainer