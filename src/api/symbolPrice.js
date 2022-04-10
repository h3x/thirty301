import {BASE_URL, API_KEY } from './apiKey'
import axios from 'axios'

const symbolPrice = (symbol) => {
    if (!symbol){ return {} }
    const endpoint = BASE_URL + `function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`

    console.log(endpoint)
    return axios.get(endpoint)
        .then( res => res.data)
}

export default symbolPrice