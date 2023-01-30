import { FlatList } from "native-base"
import MovieCard from "../listItems/MovieCard"

const MoviesList = ({movies}) => {
    return (
        <FlatList
        data={movies} 
        renderItem={({item}) => (
            <MovieCard 
            image={item.poster_path}
            title={item.title}
            popularity={item.popularity}
            releaseDate={item.release_date}
            />
        )}
        keyExtractor={item => item.id} 
        showsVerticalScrollIndicator={false}
        style={{ width: '95%' }}
        />
    
    )
}

export default MoviesList
