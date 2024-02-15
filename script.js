const apiKey = "81e6d898f706cecef5181b38ad3d666f";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".searchBox input");
const searchBtn = document.querySelector(".searchBox button");
const weatheIcon=document.querySelector('.weather-icon');
const weather=document.querySelector('.weather');
const error=document.querySelector(".error");


// api call for getting weather 
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


  if(response.status==404){
    document.querySelector(".error").style.display='block';
    weather.style.display='none';
  }


 else{
    var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
  
  if(data.weather[0].main=='Clouds'){
      weatheIcon.src="images/clouds.png";
  }

  else if(data.weather[0].main=='Clear'){
      weatheIcon.src="images/clear.png";
  }

  else if(data.weather[0].main=='Drizzle'){
      weatheIcon.src="images/drizzle.png";
  }

  else if(data.weather[0].main=='Mist'){
      weatheIcon.src="images/mist.png";
  }

  else if(data.weather[0].main=='Rain'){
      weatheIcon.src="images/rain.png";
  }

  else if(data.weather[0].main=='Snow'){
      weatheIcon.src="images/snow.png";
  }

  weather.style.display='block';
  error.style.display='none';
  
 }


}

//serachbox click event listner
searchBtn.addEventListener("click", () => {
  const city = searchBox.value;
  checkWeather(city);
});
