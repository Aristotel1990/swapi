const mongoose = require('mongoose');

const url = process.env.MONGO_URI_LOCAL || 'mongodb://localhost:27017/swapi'
const url_web=process.env.MONGO_URI_WEB || 'mongodb+srv://Teli:Teli123456789@swapi.zqt9e.mongodb.net/swapi?retryWrites=true&w=majority'
const connect = async () => {
   await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log('Connected to MongoDb!')
}
module.exports = connect
