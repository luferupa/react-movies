import { Select, VStack } from "native-base"
import { useState } from "react"

const FormTvShows = props => {
    const [errors, setErrors] = useState([])

    const onValueChange = filterValue => {
        props.setFilter(filterValue)
        props.fetchTvShows(filterValue)
    }

    return (
        <VStack space={2} width='100%' py={5}>
            <Select selectedValue={props.filter} minWidth="200" mt={1} onValueChange={filterValue => onValueChange(filterValue)}>
                <Select.Item label="airing_today" value="airing_today" />
                <Select.Item label="popular" value="popular" />
                <Select.Item label="on_the_air" value="on_the_air" />
                <Select.Item label="top_rated" value="top_rated" />
            </Select>
        </VStack>
    )
}

export default FormTvShows