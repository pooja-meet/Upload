const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())

app.use(cors({
    origin: 'https://imaginative-vacherin-a4ae66.netlify.app',
    method: 'GET,POST,DELETE,PUT',
}))

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const router = require('./router')

app.use('/', router)

app.get('/d', (req, res) => {
    res.send("server is running...")
})


app.listen(3000, () => console.log(`server is running at http://localhost:3000`))

