const APIkey="8267dbfd2c613c82a97d1c6b38524917";
const APIurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const S_input=document.querySelector(".search-input");
const S_button=document.querySelector(".search-btn");
const W_Icon=document.querySelector(".Weather-icon");
async function checkweather(City) {
    const response = await fetch(APIurl+City+`&appid=${APIkey}`);
    if(response.status== 404){
        document.querySelector(".error").style.display = "block";
    }
    else{
    var  data = await response.json();
    console.log(data);

    document.querySelector(".City").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
     
    if(data.weather[0].main=="Clouds"){
        W_Icon.src="Cloudy-weather.jpg";
    }
    else if(data.weather[0].main=="Clear"){
        W_Icon.src="Suny-day.jpg";
    }
   else if(data.weather[0].main=="Rain"){
        W_Icon.src="Rainy-weather.jpg";
    }
   else if(data.weather[0].main=="Haze"){
    W_Icon.src="Sun-with-cloud.png";
}
   else if(data.weather[0].main=="Mist"){
    W_Icon.src="Mist.jpg";
}
document.querySelector(".error").style.display = "none";
    }
}
S_button.addEventListener("click",()=>{
    checkweather(S_input.value);
})
