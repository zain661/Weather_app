class TempManager {
    constructor(){
        this.cityData = []
    }

   async getDataFromDB() {
       const cities =  await $.get('/cities') 
       console.log(cities)
       if(cities.length !=0){
        for(let city of cities){
          city.saved = true
          this.cityData.push(city)
      }
       }
       
    }

    async getCityData(cityName){
        const weatherData = await $.get(`/city/${cityName}`)
        weatherData.saved = false
        this.cityData.push(weatherData)
    }

    async saveCity(cityName){
        let city
        this.cityData.forEach( c => {
           if(c.name == cityName) {
            c.saved = true
             city = c
             
           }
        })

        $.post("/city", city, function (response) {
            console.log("POST complete");
          });
        }
            
    async removeCity(cityName){
        await $.ajax({
            url: `/city/${cityName}`,
            method: "DELETE",
            success: res => {
              this.cityData.forEach( c => {
                if(c.name == cityName) {
                  c.saved = false
                }
             })
                  } })
                  // const index = this.cityData.indexOf(city)
                  // this.cityData.splice(index,1)
                }   
                  
    }



