const express = require ('express')
const router = express.Router()
const axios = require ('axios')
const City = require('../model/city')

router.get('/city/:cityName', function(req,res){
  const cityName = req.params.cityName
  const key = 'bf4760e2c038af6cf3088c35a9d8d33e'
  
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)
  .then(result =>  {
    const jsonData = JSON.stringify(result.data)
    const JsCode = JSON.parse(jsonData)
        
    const weatherData = {
      name: JsCode.name,
      temperature:JsCode.main.temp,
      condition: JsCode.weather[0].description,
      conditionPic: JsCode.weather[0].icon
  }
  console.log(weatherData.temperature)
  res.send(weatherData)
  })


})

router.get('/cities',function(req,res){
  City.find({},function(err,cities){
    res.send(cities)
  })
})

router.post('/city', function(req,res){
  const newCity = req.body
  console.log(newCity)
  const city = new City ({
    name: newCity.name,
    temperature:newCity.temperature,
    condition: newCity.condition,
    conditionPic: newCity.conditionPic
  })
  city.save()
  res.end()
})

router.delete('/city/:cityName',function(req,res){
      const cityName = req.params.cityName
      City.findOneAndDelete({"name" : cityName} , function(err,res){
      console.log("The city has been deleted")
      })
      res.end()
})




module.exports = router