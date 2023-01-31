import axios from 'axios'
import qs from 'qs'
import { APP_KEY, BASE_URL } from '../config/api_config'

export const getResultsByFilter = async filter => {
    const url = `${BASE_URL}${filter}`

    try {

        const params = {
            api_key: APP_KEY
        }
        
        const moviesAxios = axios.create({
            paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
        })

        const response = await moviesAxios.get(url, {params})

        //console.log('RESPONSE', response.data.results)
        //response depends on if it's an array or a single object
        return response.data.results? response.data.results : response.data
        
    } catch (error) {
        throw error
    }
}