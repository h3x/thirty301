import {BASE_URL, API_KEY } from './apiKey'
import axios from 'axios'

const symbolPrice = (symbol) => {
    const endpoint = BASE_URL + `function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=15min&apikey=${API_KEY}`

    console.log(endpoint)
    return axios.get(endpoint)
        .then( res => res.data)
}

export default symbolPrice