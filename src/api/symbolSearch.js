import {BASE_URL, API_KEY } from './apiKey'
import axios from 'axios'

const symbolSearch = (query) => {
    const endpoint = BASE_URL + `function=SYMBOL_SEARCH&keywords=${query}&apikey=${API_KEY}`
    console.log(endpoint)
    return axios.get(endpoint)
        .then( res => res.data)
        .then( res => res.bestMatches)
        .then( res => (res.map( item => ({
            symbol: item['1. symbol'],
            name: item['2. name']
            }) 
            ))
        )
        
    
}

export default symbolSearch