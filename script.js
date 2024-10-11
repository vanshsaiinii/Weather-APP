//Selecting classes and boxes

const inputBox = document.querySelector('.formok');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.img6');
const temperature = document.querySelector('.deg');
const description = document.querySelector('.deg2');
const humidity = document.querySelector('.per');
const wind_speed = document.querySelector('.humidoo');

//main function

async function weather(city){
    const apikey = "de9ac86e00116280dc0b1ae41bc96aa7"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

  const weatherdata =  await fetch(`${url}`).then(respon =>respon.json())
 //if error comes 
    if(weatherdata.cod===`404`){
        weather_img.src= "/404.png";
        temperature.innerHTML=`404`;
  description.innerHTML=`LOCATION NOT FOUND`;
  humidity.innerHTML=`0`;
  wind_speed.innerHTML=`0`;
        return;
    }
  console.log(weatherdata)


  // appending data from api to html
  temperature.innerHTML=`${ Math.floor(weatherdata.main.temp - 273.15)  + `&#8451;`}`
  description.innerHTML=`${weatherdata.weather[0].main}`
  humidity.innerHTML=`${weatherdata.main.humidity + "%"}`;
  wind_speed.innerHTML=`${weatherdata.wind.speed + "KM/H"}`;


  switch (weatherdata.weather[0].main) {
    case 'Clouds':
        weather_img.src= "/cloud.png";
        break;
    case 'Clear':
        weather_img.src= "/clear.png";
        break;
    case 'Rain':
        weather_img.src= "/rain.png";
        break;
    case 'Mist':
        weather_img.src= "/mist.png";
        break;
 
        
        
    
}}
weather();

searchBtn.addEventListener("click",()=>{
    weather(inputBox.value);
})