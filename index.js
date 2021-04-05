require('dotenv').config()
const app = require('./src/server.js')
const port = process.env.PORT || 3090
app.listen(port
    , () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
