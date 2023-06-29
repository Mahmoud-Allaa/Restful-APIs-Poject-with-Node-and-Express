require('dotenv').config();
const mongoose = require('mongoose');
const express = require("express")
const cors = require("cors")
const productRoute = require("./routes/productRoute")
const errorMeddkeware = require("./middleware/errorMeddleware")

const app = express()
const PORT = process.env.PORT || 3001
const MONGO_URL = process.env.MONGO_URL
const FRONTEND = process.env.FRONTEND

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/products', productRoute)


// Start ==> Routes 
app.get('/', (req, res) => {
    res.send('Hello Mahmoud')
})

var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(errorMeddkeware)




mongoose.set("strictQuery", false)
mongoose.connect(MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Node API app is running on port: ${PORT}`);
        })
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log(error)
    });