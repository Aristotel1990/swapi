require('dotenv').config()
const mongoose = require('mongoose')
const connect = require('./connection')
const Starships = require('./schemas/starship')
const Vehicles = require('./schemas/vehicle')
const { getStarships, getVehicles } = require('../swapi_api')


const vehiclesGrab = async () => {
    let cycles = true
    let page = 1
    let vehicleTotal = false
    let vehicles = []
    while (cycles) {
        const res = await getVehicles(page)
        if (!res) return
        if (!res.data.next) {
            cycles = false
        }
        page++
        vehicleTotal = vehicleTotal || res.data.count
        const data = res.data.results
        vehicles = vehicles.concat(data);
    }
    console.log('vehicles :', vehicles.length)

    for (let vehicle of vehicles) {
        vehicle.count = 1
    }
    return vehicles
}

const starshipsGrab = async () => {
    let cycles = true
    let page = 1
    let starchipTotal = false
    let starships = []
    while (cycles) {
        const res = await getStarships(page)
        if (!res) return
        if (!res.data.next) {
            cycles = false
        }
        page++
        starchipTotal = starchipTotal || res.data.count
        const data = res.data.results
        starships = starships.concat(data);
    }
    console.log('starships :', starships.length)
    for (let starship of starships) {
        starship.count = 1
    }
    return starships
}

const run = async () => {
    // Drop database collections
    await connect()
    try {
        for ( let model of [Starships, Vehicles] ) {
            let list = await model.db.db.listCollections({
                name: model.collection.name
            }).toArray()
            if ( list.length !== 0 ) {
                await model.collection.drop();
            } else {
                console.log('collection %s does not exist',model.collection.name);
            }
        }
    } catch(e) {
        console.error(e);
        
    }
    // collect swapi data
    const vehicles = await vehiclesGrab()
    const starships = await starshipsGrab()

    // insert in DB
    // const dataVehicles = new Vehicles(vehicles)
    // const dataStarships = new Starships(starships)
    // await dataVehicles.save()
    // await dataStarships.save()

    await Vehicles.insertMany(vehicles)
    await Starships.insertMany(starships)
    console.log('Database Populated !')
    
}
run()