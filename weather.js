fetch("https://api.openweathermap.org/data/2.5/weather?lat=39.12&lon=-84.51&appid=12345678900987654321")
    .then(res => res.json())
    .then( (data) => {
        console.log(data); 
    

    const temperatureKelvin = data.main.temp;
    const description = data.weather[0].description;

    
    const temperatureFahrenheit = (temperatureKelvin - 273.15) * 9/5 + 32;


    document.getElementById("temperature").textContent = `Temperature: ${temperatureFahrenheit.toFixed(1)} °F`;
    document.getElementById("description").textContent = `Condition: ${description}`;
})
.catch(error => console.error("Error fetching weather data:", error));



