import axios from 'axios'
import qs from 'qs'
import { APP_KEY, BASE_URL } from '../config/api_config'

export const getMoviesByFilter = async filter => {
    const url = `${BASE_URL}/movie/${filter}`

    try {

        const params = {
            api_key: APP_KEY
        }
        
        const moviesAxios = axios.create({
            paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
        })

        const response = await moviesAxios.get(url, {params})

        //console.log('RESPONSE', response.data.results)
        //if it's a number it means is a movie details request
        if(!isNaN(filter)) return response.data

        //if not, it's a movies filter request, with a different response structure
        const movies = response.data.results

        return movies
        
    } catch (error) {
        throw error
    }
}