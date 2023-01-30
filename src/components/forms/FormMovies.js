import { Select, VStack } from "native-base"
import { useState } from "react"

const FormMovies = props => {
    //const [filter, setFilter] = useState('popular')
    const [errors, setErrors] = useState([])

    const onValueChange = filterValue => {
        props.setFilter(filterValue)
        props.fetchMovies(filterValue)
    }

    return (
        <VStack space={2} width='100%' py={5}>
            <Select selectedValue={props.filter} minWidth="200" mt={1} onValueChange={filterValue => onValueChange(filterValue)}>
                <Select.Item label="now_playing" value="now_playing" />
                <Select.Item label="popular" value="popular" />
                <Select.Item label="top_rated" value="top_rated" />
                <Select.Item label="upcoming" value="upcoming" />
            </Select>
        </VStack>
    )
}

export default FormMovies