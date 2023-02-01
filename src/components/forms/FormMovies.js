import { CheckIcon, Select, VStack } from "native-base"

const FormMovies = props => {

    const onValueChange = filterValue => {
        props.setFilter(filterValue)
        props.fetchMovies(filterValue)
    }

    return (
        <VStack space={2} width='100%' py={5}>
            <Select 
            selectedValue={props.filter} 
            minWidth="200" mt={1} 
            onValueChange={filterValue => onValueChange(filterValue)}
            _selectedItem={{
                endIcon: <CheckIcon size='5' color='white' />,
                backgroundColor: '#37826E',
                _text: {color: 'white'}
            }}
            _item={{
                py: '2'
            }}
            >
                <Select.Item label="now_playing" value="now_playing" />
                <Select.Item label="popular" value="popular" />
                <Select.Item label="top_rated" value="top_rated" />
                <Select.Item label="upcoming" value="upcoming" />
            </Select>
        </VStack>
    )
}

export default FormMovies