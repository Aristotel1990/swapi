const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Vehicle = new Schema({
    count: Number,
    vehicle_class: {
        type: String
    },
    passengers: {
        type: String
    },
    pilots: {
        type: Array
    },
    name: {
        type: String
    },
    created: {
        type: String,
        format: Date
    },
    url: {
        type: String,
        format: URL
    },
    cargo_capacity: {
        type: String
    },
    edited: {
        type: String,
        format: Date
    },
    consumables: {
        type: String
    },
    max_atmosphering_speed: {
        type: String
    },
    crew: {
        type: String
    },
    length: {
        type: String
    },
    films: {
        type: Array
    },
    model: {
        type: String
    },
    cost_in_credits: {
        type: String
    },
    manufacturer: {
        type: String
    }
});

const Vehicles = mongoose.model('Vehicles', Vehicle);
module.exports = Vehicles
