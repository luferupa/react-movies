import { FlatList } from "native-base"
import ResultItemCard from "../listItems/ResultItemCard"

const ResultsList = ({ results, navigation, isSearch=false }) => {

    return (
        <FlatList
        data={results} 
        renderItem={({item}) => (
            <ResultItemCard 
            image={item.poster_path}
            title={item.title? item.title : item.name}
            popularity={item.popularity}
            releaseDate={item.release_date? item.release_date : item.first_air_date}
            id={item.id}
            navigation={navigation}
            isMovie={item.title? true : false}
            isSearch={isSearch}
            />
        )}
        keyExtractor={item => item.id} 
        showsVerticalScrollIndicator={false}
        style={{ width: '95%' }}
        />
    
    )
}

export default ResultsList
