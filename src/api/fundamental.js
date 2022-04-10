import {BASE_URL, API_KEY } from './apiKey'
import axios from 'axios'

const fundamentalData = (symbol) => {
    if (!symbol){ return {} }
    const endpoint = BASE_URL + `function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY}`

    return axios.get(endpoint)
        .then( res => res.data)
}

export default fundamentalData