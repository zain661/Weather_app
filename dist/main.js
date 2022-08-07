const renderer = new Renderer()
const tempManager = new TempManager()

window.onload = loadPage();

async function loadPage(){
  await tempManager.getDataFromDB()
  console.log(tempManager.cityData)
 renderer.renderData( tempManager.cityData)

}
async function handleSearch(){
    const input = $("#city-input").val()
    await tempManager.getCityData(input)
    renderer.renderData(tempManager.cityData)
}

$(".main").on("click", ".saveSign", async function (){
    const cityName = $(this).closest(".city-container").find(".cityName").text()
    console.log(cityName)
    await tempManager.saveCity(cityName)
    // await tempManager.getDataFromDB()
    renderer.renderData(tempManager.cityData)
})

$(".main").on("click", ".removeSign", async function (){
    const cityName = $(this).closest(".city-container").find(".cityName").text()
    await tempManager.removeCity(cityName)
    // await tempManager.getDataFromDB()
    renderer.renderData(tempManager.cityData)
})