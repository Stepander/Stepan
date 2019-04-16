const express = require('express')
const app = express()

app.route('/').get((request, response)=>{
response.send('Kolya privet')
})

app.listen(8080, ()=>{
    console.log('Server started')
})
