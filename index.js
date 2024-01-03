let apiKey="417c822e623bb391c76c1c09cc70bf64";
let apiURL="https://api.openweathermap.org/data/2.5/weather?"
let city;
let userCity= document.getElementById("userText");
let temperature=document.getElementById("temp");
let ct=document.getElementById("city");
let humidity=document.getElementById("humidity-info");
let windInfo=document.getElementById("wind-info");
let weatherImage=document.getElementById("weather_img");

async function getWeatherData(){
    let response;
    if(userCity.value=="")
    {
        alert("ENTER A CITY NAME!");
    }else{
        city=userCity.value;
    response= await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    }
    let data= await response.json();
    ct.innerHTML=data.name;
    temperature.innerHTML=Math.round((data.main.temp) - 273.15) + "°C";
    humidity.innerHTML=data.main.humidity + "%";
    windInfo.innerHTML=data.wind.speed + "km/hr";
    userCity.value="";

    if(data.weather[0].main=="Clear"){
        weatherImage.src="Clear.png";
    }else if(data.weather[0].main=="Snow"){
        weatherImage.src="Snow.png";
    }else if(data.weather[0].main=="Clouds"){
        weatherImage.src="Clouds.png";
    }else if(data.weather[0].main=="Drizzle"){
        weatherImage.src="Drizzle.png";
    }else if(data.weather[0].main=="Haze"){
        weatherImage.src="Haze.png";
    }else if(data.weather[0].main=="Rain"){
        weatherImage.src="Rain.png";
    }
    console.log(data)

    // }
}