class Renderer {
      constructor(){
        this.cityDiv = $(".main")
        this.src = $("#weather-template").html();
        this.template = Handlebars.compile(this.src);
   }
    renderData (allCityData){
        this.cityDiv.empty();
        let someHtml = this.template({ allCityData })
        this.cityDiv.append(someHtml)
    }
}