import MovieContainer from "../containers/MovieContainer"

const MovieScreen = ({ navigation, route }) => {
    return (
        <MovieContainer navigation={navigation} route={route} />
    )
}

export default MovieScreen