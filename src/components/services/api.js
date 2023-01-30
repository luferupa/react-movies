import axios from 'axios'
import qs from 'qs'
import { APP_KEY, BASE_URL } from '../config/api_config'

export const getPopularMovies = async filter => {
    const url = `${BASE_URL}/movie/${filter}`
    
    try {

        const params = {
            api_key: APP_KEY
        }
        
        const moviesAxios = axios.create({
            paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
        })

        const response = await moviesAxios.get(url, {params})

        console.log('RESPONSE', response.data.results)

        const movies = response.data.results

        return movies
        
    } catch (error) {
        throw error
    }
}