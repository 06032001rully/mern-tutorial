console.log("Hello World")

const express = require('express')
const dotenv = require('dotenv').config()
const {
    errrorHandler
} = require('.middleware/erroMidleware')
const port = process.env.PORT || 5000


const app = express()
app.use = (express.json())
app.use = (express.urlencoded({
    extended: false
}))

app.use('/api/goals', require('/routes/goalRoutes.js'))

app.use(errorHandler)

app.get('/api/goals', (req, res) => {
    res.json({
        message: 'Get Goals'
    })
})

app.listen(port, () => console.log(`Server started on port ${port}`))