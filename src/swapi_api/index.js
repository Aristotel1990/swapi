const axios = require('axios');

const base_uri = process.env.SWAPI_URL || 'https://swapi.dev/api/'
const starships = 'starships'
const vehicles = 'vehicles'

const getStarships = async (page = 1) => {
    try {
        const response = await axios.get(base_uri + starships+'/?page='+page)
        return response
    } catch(e) {
        console.log('error :', e)
        return null
    }
}

const getVehicles = async (page = 1) => {
    try {
        const response = await axios.get(base_uri + vehicles+'/?page='+page)
        return response
    } catch(e) {
        console.log('error :', e)
        return null
    }
}

module.exports = {
    getVehicles,
    getStarships
}
