import { CheckIcon, Select, VStack } from "native-base"

const FormTvShows = props => {

    const onValueChange = filterValue => {
        props.setFilter(filterValue)
        props.fetchTvShows(filterValue)
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
                <Select.Item label="airing_today" value="airing_today" />
                <Select.Item label="popular" value="popular" />
                <Select.Item label="on_the_air" value="on_the_air" />
                <Select.Item label="top_rated" value="top_rated" />
            </Select>
        </VStack>
    )
}

export default FormTvShows