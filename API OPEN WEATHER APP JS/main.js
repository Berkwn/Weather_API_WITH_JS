
const API_URL=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

const API_KEY="67d57b3d6ec8a4b276f75c0c5fffcd6c"

const cityInput=document.getElementById("cityInput")
const btnsearch=document.getElementById("btnsearch")



     async function CheckWeather(city){


        const request=await fetch(API_URL+ city +`&appid=${API_KEY}`)
        const response=await request.json()
        console.log(response)

        document.querySelector(".temp").innerHTML=response.main.temp+"°C "
        document.querySelector(".city").innerHTML=response.name
        document.querySelector(".wet").innerHTML=response.weather[0].description
        document.querySelector(".windy").innerHTML=response.wind.speed  + " km / saat"
        document.querySelector(".humidity").innerHTML=response.main.humidity +"% yağış oranı"


     }


 btnsearch.addEventListener("click",()=>{

    CheckWeather(cityInput.value);    
 })

 
    
    


