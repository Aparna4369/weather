const inputValue=document.querySelector(".enter");
const placeValue=document.getElementById("place");
const sunIcon=document.querySelector(".sun");
const temperature=document.getElementById("temperature");
const forecast=document.getElementById("forecast");
const humidity=document.querySelector(".humidity");
const windSpeed=document.querySelector(".wind");
const visibility=document.querySelector(".visibility");
const windIcon=document.querySelector(".winds");
const dropIcon=document.querySelector(".drop");
const searchButton=document.querySelector(".button");
const errorGif=document.querySelector(".errorGif");



    


async function weatherCheck(city) {
    if (inputValue.value==="") {
        return
        
    }

    
    const apiKey="e9620da00db31fa9016ff79494e00430" 
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    
     
 
    
   


    const weatherData=await fetch(`${apiUrl}`).then(
        (response) =>response.json()
    )
    
    temperature.innerHTML=`${Math.round(weatherData.main.temp-273.15)}&deg C`
    placeValue.innerHTML=`${weatherData.name}`;
    humidity.innerHTML=`${weatherData.main.humidity}%`;
    windSpeed.innerHTML=`${weatherData.wind.speed}km/hr`;
    visibility.innerHTML=`${weatherData.visibility/1000}km`

   
  
   switch (weatherData.weather[0].main) {
    case "Rain":
        sunIcon.src="rainy.gif";
        
        break;
    case "Clouds":
        sunIcon.src="cloudy.gif";
        break;
    case "Mist":
        sunIcon.src="mist.gif"
   
    default:
        sunIcon.src="sun.gif"
        break;
   }

   if (weatherData.weather[0].main=="Clouds") {
    forecast.innerHTML="Cloudy day"
    
   }else if(weatherData.weather[0].main=="Rain"){
    forecast.innerHTML="Rainy day"
   }else if(weatherData.weather[0].main=="Mist"){
    forecast.innerHTML="Mist day"
   }else {
    forecast.innerHTML="Clear day"
   };



 

    console.log(weatherData);

    
    
}

searchButton.addEventListener("click", ()=>{
    weatherCheck(inputValue.value)
});








