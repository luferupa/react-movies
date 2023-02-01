import {Center, HStack, Spinner, Text} from 'native-base'

const Loading = () => {
    return (
        <Center>
            <HStack space={2} justifyContent="center">
                <Spinner accessibilityLabel="Loading results" color='black' />
                <Text fontWeight='bold'>Loading results</Text>
            </HStack>
        </Center>
    )
}

export default Loading