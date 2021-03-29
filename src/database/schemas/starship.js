const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const starship = new Schema({
    count: Number,
    passengers: {
        type: String,
    },
    pilots: {
        type: Array
    },
    name: {
        type: String
    },
    hyperdrive_rating: {
        type: String
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
    MGLT: {
        type: String
    },
    starship_class: {
        type: String
    },
    created: {
        type: String,
        format: Date
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

const Starship = mongoose.model('Starships', starship);
module.exports = Starship
