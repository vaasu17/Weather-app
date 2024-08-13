const options = {
    method: 'GET',
	headers: {
		'x-rapidapi-key': '19dd8394c0msh58d8443461d5bb1p1c68a3jsn6833c59b036f',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

function convertShiftToHHMM(shiftInSeconds) {
    let totalMinutes = Math.floor(shiftInSeconds / 60);
    let hours = Math.floor(totalMinutes / 60) % 24;
    let minutes = totalMinutes % 60;
    let formattedHours = hours.toString().padStart(2, '0');
    let formattedMinutes = minutes.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
}

const getWeather = (city)=>{
    cityName.innerHTML = city
    fetch('https://open-weather13.p.rapidapi.com/city/' + city +'/EN', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        // cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.main.temp
        temp2.innerHTML = response.main.temp
        feels_like.innerHTML = response.main.feels_like
        humidity.innerHTML = response.main.humidity
        humidity2.innerHTML = response.main.humidity
        min_temp.innerHTML = response.main.temp_min
        max_temp.innerHTML = response.main.temp_max
        wind_speed.innerHTML = response.wind.speed
        wind_speed2.innerHTML = response.wind.speed
        wind_degrees.innerHTML = response.wind.deg
        sunrise.innerHTML = convertShiftToHHMM( response.sys.sunrise)
        sunset.innerHTML = convertShiftToHHMM(response.sys.sunset)
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click" , (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")
    


    
 