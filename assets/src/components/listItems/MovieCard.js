import { Box, Button, Center, Heading, HStack, Image, Text, VStack } from "native-base"
import { IMAGES_URL } from "../config/api_config"

const MovieCard = props => {
    const {image, title, popularity, releaseDate} = props
    return (
        <Box pb={4} mb={1} maxH={120}>
            <HStack>
                <Box>
                    <Image alt={title} source={{ uri: `${IMAGES_URL}${image}` }} size={'xl'} maxH={110} resizeMode='center' />
                </Box>
                <VStack>
                    <Heading size='xs' width={230}>{title}</Heading>
                    <Text>Popularity: {popularity}</Text>
                    <Text>Release Date: {releaseDate}</Text>
                    <Box padding={2}>
                        <Button backgroundColor='#07B6D4'>More Details</Button>
                    </Box>
                </VStack>
            </HStack>
        </Box>
    )
}

export default MovieCard