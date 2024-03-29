import { Ionicons } from "@expo/vector-icons"
import { Button, Center, CheckIcon, FormControl, HStack, Icon, Input, Select, VStack } from "native-base"
import { useState } from "react";

const SearchForm = props => {
    const [errors, setErrors] = useState({});

    const onSubmit = () => {
        if(props.showName == undefined || props.showName == ''){
            setErrors({
                name: 'Name not valid'
            })
        }else{
            setErrors({})
            props.fetchResults()
            props.setShowName('')
        }
      }

    const onValueChange = filterValue => {
        props.setFilter(filterValue)
    }

    return (
        <Center>
        <VStack space={2} width='100%' py={5}>
            
                <FormControl isRequired isInvalid={'name' in errors}>
                    <FormControl.Label fontSize='sm'>Search Movie/TV Show Name</FormControl.Label>
                    <HStack width='100%' space={2}>
                        <Input 
                            placeholder='i.e. James Bond, CSI'
                            variant='filled'
                            bg='gray.200'
                            px={3}
                            width='100%'
                            InputLeftElement={
                                <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />} />
                            }
                            onChangeText={value => {
                                props.setShowName(value)
                              }}
                            _invalid={{
                                borderColor:'red.400' 
                            }}
                            value={props.showName}
                        />
                    </HStack>
                    
                </FormControl>
                <FormControl isRequired isInvalid={'name' in errors}>
                    <FormControl.Label fontSize='sm'>Choose Search Type</FormControl.Label>
                    <VStack width='100%'>
                        <HStack space={2}>
                            <Select 
                            selectedValue={props.filter} 
                            width="180" mt={1} 
                            onValueChange={filterValue => onValueChange(filterValue)}
                            _invalid={{
                                borderColor:'red.400'
                            }}
                            _selectedItem={{
                                endIcon: <CheckIcon size='5' color='white' />,
                                backgroundColor: '#37826E',
                                _text: {color: 'white'}
                            }}
                            _item={{
                                py: '2'
                            }}
                            >
                                <Select.Item label="movie" value="movie" />
                                <Select.Item label="multi" value="multi" />
                                <Select.Item label="tv" value="tv" />
                            </Select>
                            <Button onPress={onSubmit} width='100' 
                            backgroundColor='#07B6D4' 
                            startIcon={<Icon as={Ionicons} name='ios-search' />}>
                                Search
                            </Button>
                        </HStack>
                    </VStack>
                    <FormControl.HelperText _text={{
                        fontSize: 'xs'
                    }} _invalid={{
                        display: 'none'
                    }}>
                        Please select a search type
                    </FormControl.HelperText>
                    <FormControl.ErrorMessage _text={{
                        fontSize: 'xs'
                    }}>
                    Movie/TV show name is required
                    </FormControl.ErrorMessage>
                </FormControl>
            
        </VStack></Center>
    )
}

export default SearchForm