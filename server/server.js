const express = require('express');
const axios = require('axios')
const cors = require('cors');
const app = express();
app.use(cors())

const url = 'https://restcountries.com/v3.1/name/';

app.get('/results', (req, res) => {
    const name = req.query.search
    axios(`${url}${name}`)
    .then(response => {
        const data = response.data
        res.json(data)

    }).catch(err => {
        console.log('No country found')
    })
})


app.listen(5000, () => {console.log("Server started on port 5000")})

