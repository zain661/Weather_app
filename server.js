const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')
const api = require('./server/routes/api.js')
const mongoose = require ('mongoose')
const port = 2002


app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


mongoose.connect('mongodb://localhost/weatherAppDB',{ useNewUrlParser: true })


app.use('/',api)


app.listen(port,function(req,res){
    console.log(`the server running on port ${port}`)
})