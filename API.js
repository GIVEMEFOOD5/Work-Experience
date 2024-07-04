const apiKey = "eyJ4NXQiOiJOak16WWpreVlUZGlZVGM0TUdSalpEaGtaV1psWWpjME5UTXhORFV4TlRZM1ptRTRZV1JrWWc9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJkYW5pZWxhbGxjb3JuNUBnbWFpbC5jb21AY2FyYm9uLnN1cGVyIiwiYXBwbGljYXRpb24iOnsib3duZXIiOiJkYW5pZWxhbGxjb3JuNUBnbWFpbC5jb20iLCJ0aWVyUXVvdGFUeXBlIjpudWxsLCJ0aWVyIjoiVW5saW1pdGVkIiwibmFtZSI6InNpdGVfc3BlY2lmaWMtODFmYjI2YjEtY2Y5My00ZWNkLWJmNjQtODdkNWRiNTE3Mjk1IiwiaWQiOjUxNjcsInV1aWQiOiI3NzU1MTI1Mi04YTBjLTQzYWQtOTRkOC1hNDhhMThmNDAyOTIifSwiaXNzIjoiaHR0cHM6XC9cL2FwaS1tYW5hZ2VyLmFwaS1tYW5hZ2VtZW50Lm1ldG9mZmljZS5jbG91ZDo0NDNcL29hdXRoMlwvdG9rZW4iLCJ0aWVySW5mbyI6eyJ3ZGhfc2l0ZV9zcGVjaWZpY19mcmVlIjp7InRpZXJRdW90YVR5cGUiOiJyZXF1ZXN0Q291bnQiLCJncmFwaFFMTWF4Q29tcGxleGl0eSI6MCwiZ3JhcGhRTE1heERlcHRoIjowLCJzdG9wT25RdW90YVJlYWNoIjp0cnVlLCJzcGlrZUFycmVzdExpbWl0IjowLCJzcGlrZUFycmVzdFVuaXQiOiJzZWMifX0sImtleXR5cGUiOiJQUk9EVUNUSU9OIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiU2l0ZVNwZWNpZmljRm9yZWNhc3QiLCJjb250ZXh0IjoiXC9zaXRlc3BlY2lmaWNcL3YwIiwicHVibGlzaGVyIjoiSmFndWFyX0NJIiwidmVyc2lvbiI6InYwIiwic3Vic2NyaXB0aW9uVGllciI6IndkaF9zaXRlX3NwZWNpZmljX2ZyZWUifV0sInRva2VuX3R5cGUiOiJhcGlLZXkiLCJpYXQiOjE3MjAxMDExMDMsImp0aSI6ImY1YmY2M2FlLWUzNzAtNDgyZC1hNGNjLTFjYjFlOGFlN2M5YSJ9.Y98WJKxYSLw5ySmlWmsfF4gDcbthfK4NA-75xvfjcorRcBv_r2o6kpgszQGM2AG6mwqjXW8HstqmmoXg_XLkK4Zj4yg0VSarnm_aAuLO6h9O1qP86Yhf8Oeun7o05wF-fRHkHgaH9TiWuQfRFApFS4vaHJ8hGoifccW-CnBq3zmu7k7bLzI4t4OOLvZddutli4MRsSBWX-257bnhOTpu85dK9n02i4wYk7wI_UG07ObfOPufbWdN_ooiVMD6kem_aoN5ThjWpvsUrZuQlG-0XQD96Kc4omAmUVGTODVveP10FYAj8dPHbQj3pX6318SGfdbnEoUTP9yS7FbLn_vCpw==";

function plymouth() {
    let url = "https://data.hub.api.metoffice.gov.uk/sitespecific/v0/point/daily?longitude=-4.142657&latitude=50.375458&includeLocationName=true" 
    let options = { 
        headers : {
            apikey : apiKey
        }
    }
    fetch(url, options).then(function(response) {
        return response.json();
    }).then(function(data) {
    
        var time = data.features[0].properties.timeSeries[1].time
        var dayWeatherCode = data.features[0].properties.timeSeries[1].daySignificantWeatherCode
        var maxTemp = data.features[0].properties.timeSeries[1].dayMaxScreenTemperature
        var nightMinTemp = data.features[0].properties.timeSeries[1].nightMinScreenTemperature
        var windSpeed = data.features[0].properties.timeSeries[1].midday10MWindSpeed
        var rain = data.features[0].properties.timeSeries[1].dayProbabilityOfRain

        windSpeed *= 2.23693629;
        windSpeed = windSpeed.toFixed(2);

        let safety = document.getElementById("safe");

        if (dayWeatherCode < 13 && maxTemp < 40 && nightMinTemp > 5 && windSpeed < 50 && rain < 50){
            document.getElementById("thumb").src = "thumb-up.png";
            safety.innerText = "It is safe to go in the water!"
            safety.style.backgroundColor = 'green'
        }
        else{
            document.getElementById("thumb").src = "thumb-up copy.png";
            safety.innerText = "It is NOT safe to go in the water!"
            safety.style.backgroundColor = 'red'
        }
    
        document.getElementById("timeBox").innerText = time;
        document.getElementById("dayWeatherCodeBox").innerText = getWeatherDescription(dayWeatherCode);
        document.getElementById("maxTempBox").innerText = `${maxTemp}°C`;
        document.getElementById("nightMinTempBox").innerText = `${nightMinTemp}°C`;
        document.getElementById("windSpeedBox").innerText = `${windSpeed}mph`;
        document.getElementById("rainBox").innerText = `${rain}%`;
    })
}

plymouth();

function newquay() {
    let url = "https://data.hub.api.metoffice.gov.uk/sitespecific/v0/point/daily?longitude=-5.080838&latitude=50.416019&includeLocationName=true" 
    let options = { 
        headers : {
            apikey : apiKey
        }
    }
    fetch(url, options).then(function(response) {
        return response.json();
    }).then(function(data) {

        const container = document.getElementById('new');

        var time = data.features[0].properties.timeSeries[1].time
        var dayWeatherCode = data.features[0].properties.timeSeries[1].daySignificantWeatherCode
        var maxTemp = data.features[0].properties.timeSeries[1].dayMaxScreenTemperature
        var nightMinTemp = data.features[0].properties.timeSeries[1].nightMinScreenTemperature
        var windSpeed = data.features[0].properties.timeSeries[1].midday10MWindSpeed
        var rain = data.features[0].properties.timeSeries[1].dayProbabilityOfRain

        windSpeed *= 2.23693629;
        windSpeed = windSpeed.toFixed(2);

        let safety = document.getElementById("safe");

        if (dayWeatherCode < 13 && maxTemp < 40 && nightMinTemp > 5 && windSpeed < 50 && rain < 50){
            document.getElementById("thumb").src = "thumb-up.png";
            safety.innerText = "It is safe to go in the water!"
            safety.style.backgroundColor = 'green'
        }
        else{
            document.getElementById("thumb").src = "thumb-up copy.png";
            safety.innerText = "It is NOT safe to go in the water!"
            safety.style.backgroundColor = 'red'
        }

        document.getElementById("timeBox").innerText = time;
        document.getElementById("dayWeatherCodeBox").innerText = getWeatherDescription(dayWeatherCode);
        document.getElementById("maxTempBox").innerText = `${maxTemp}°C`;
        document.getElementById("nightMinTempBox").innerText = `${nightMinTemp}°C`;
        document.getElementById("windSpeedBox").innerText = `${windSpeed}mph`;
        document.getElementById("rainBox").innerText = `${rain}%`;
    })
}

newquay();

function carlyonBay() {
    let url = "https://data.hub.api.metoffice.gov.uk/sitespecific/v0/point/daily?longitude=-4.731779&latitude=50.336802&includeLocationName=true" 
    let options = { 
        headers : {
            apikey : apiKey
        }
    }
    fetch(url, options).then(function(response) {
        return response.json();
    }).then(function(data) {

        var time = data.features[0].properties.timeSeries[1].time
        var dayWeatherCode = data.features[0].properties.timeSeries[1].daySignificantWeatherCode
        var maxTemp = data.features[0].properties.timeSeries[1].dayMaxScreenTemperature
        var nightMinTemp = data.features[0].properties.timeSeries[1].nightMinScreenTemperature
        var windSpeed = data.features[0].properties.timeSeries[1].midday10MWindSpeed
        var rain = data.features[0].properties.timeSeries[1].dayProbabilityOfRain

        windSpeed *= 2.23693629;
        windSpeed = windSpeed.toFixed(2);

        let safety = document.getElementById("safe");

        if (dayWeatherCode < 13 && maxTemp < 40 && nightMinTemp > 5 && windSpeed < 50 && rain < 50){
            document.getElementById("thumb").src = "thumb-up.png";
            safety.innerText = "It is safe to go in the water!"
            safety.style.backgroundColor = 'green'
        }
        else{
            document.getElementById("thumb").src = "thumb-up copy.png";
            safety.innerText = "It is NOT safe to go in the water!"
            safety.style.backgroundColor = 'red'
        }

        document.getElementById("timeBox").innerText = time;
        document.getElementById("dayWeatherCodeBox").innerText = getWeatherDescription(dayWeatherCode);
        document.getElementById("maxTempBox").innerText = `${maxTemp}°C`;
        document.getElementById("nightMinTempBox").innerText = `${nightMinTemp}°C`;
        document.getElementById("windSpeedBox").innerText = `${windSpeed}mph`;
        document.getElementById("rainBox").innerText = `${rain}%`;
    })
}

carlyonBay()

function stIves() {
    let url = "https://data.hub.api.metoffice.gov.uk/sitespecific/v0/point/daily?longitude=-5.478301&latitude=50.211592&includeLocationName=true" 
    let options = { 
        headers : {
            apikey : apiKey
        }
    }
    fetch(url, options).then(function(response) {
        return response.json();
    }).then(function(data) {

        var time = data.features[0].properties.timeSeries[1].time
        var dayWeatherCode = data.features[0].properties.timeSeries[1].daySignificantWeatherCode
        var maxTemp = data.features[0].properties.timeSeries[1].dayMaxScreenTemperature
        var nightMinTemp = data.features[0].properties.timeSeries[1].nightMinScreenTemperature
        var windSpeed = data.features[0].properties.timeSeries[1].midday10MWindSpeed
        var rain = data.features[0].properties.timeSeries[1].dayProbabilityOfRain

        windSpeed *= 2.23693629;
        windSpeed = windSpeed.toFixed(2);

        let safety = document.getElementById("safe");

        if (dayWeatherCode < 13 && maxTemp < 40 && nightMinTemp > 5 && windSpeed < 50 && rain < 50){
            document.getElementById("thumb").src = "thumb-up.png";
            safety.innerText = "It is safe to go in the water!"
            safety.style.backgroundColor = 'green'
        }
        else{
            document.getElementById("thumb").src = "thumb-up copy.png";
            safety.innerText = "It is NOT safe to go in the water!"
            safety.style.backgroundColor = 'red'
        }

        document.getElementById("timeBox").innerText = time;
        document.getElementById("dayWeatherCodeBox").innerText = getWeatherDescription(dayWeatherCode);
        document.getElementById("maxTempBox").innerText = `${maxTemp}°C`;
        document.getElementById("nightMinTempBox").innerText = `${nightMinTemp}°C`;
        document.getElementById("windSpeedBox").innerText = `${windSpeed}mph`;
        document.getElementById("rainBox").innerText = `${rain}%`;
    })
}

stIves()

function userChoice() {

    let lat = document.getElementById("lat").value;
    let long = document.getElementById("long").value;

    let url = localStorage.getItem("api-url") || `https://data.hub.api.metoffice.gov.uk/sitespecific/v0/point/daily?longitude=${long}&latitude=${lat}`
    let options = { 
        headers : {
            apikey : apiKey
        }
    }
    fetch(url, options).then(function(response) {
        return response.json();
    }).then(function(data) {

        var time = data.features[0].properties.timeSeries[1].time
        var dayWeatherCode = data.features[0].properties.timeSeries[1].daySignificantWeatherCode
        var maxTemp = data.features[0].properties.timeSeries[1].dayMaxScreenTemperature
        var nightMinTemp = data.features[0].properties.timeSeries[1].nightMinScreenTemperature
        var windSpeed = data.features[0].properties.timeSeries[1].midday10MWindSpeed
        var rain = data.features[0].properties.timeSeries[1].dayProbabilityOfRain

        windSpeed *= 2.23693629;
        windSpeed = windSpeed.toFixed(2);

        let safety = document.getElementById("safe");

        if (dayWeatherCode < 13 && maxTemp < 40 && nightMinTemp > 5 && windSpeed < 50 && rain < 50){
            document.getElementById("thumb").src = "thumb-up.png";
            safety.innerText = "It is safe to go in the water!"
            safety.style.backgroundColor = 'green'
        }
        else{
            document.getElementById("thumb").src = "thumb-up copy.png";
            safety.innerText = "It is NOT safe to go in the water!"
            safety.style.backgroundColor = 'red'
        }

        document.getElementById("timeBox").innerText = time;
        document.getElementById("dayWeatherCodeBox").innerText = getWeatherDescription(dayWeatherCode);
        document.getElementById("maxTempBox").innerText = `${maxTemp}°C`;
        document.getElementById("nightMinTempBox").innerText = `${nightMinTemp}°C`;
        document.getElementById("windSpeedBox").innerText = `${windSpeed}mph`;
        document.getElementById("rainBox").innerText = `${rain}%`;
    })
}

userChoice()

let url = "https://data.hub.api.metoffice.gov.uk/sitespecific/v0/point/daily?longitude=-4.142657&latitude=50.375458&includeLocationName=true" 
let options = { 
    headers : {
        apikey : apiKey
    }
}
fetch(url, options).then(function(response) {
    return response.json();
}).then(function(data){
    let code = data.features[0].properties.timeSeries[1].daySignificantWeatherCode;
    let weatherDescription = getWeatherDescription(code);
    console.log(`Weather description for code ${code}: ${weatherDescription}`);

})

// Call the fetchData function

// fetchData();

// Example usage:
//let code = data.features[0].properties.timeSeries[1].daySignificantWeatherCode;

function getWeatherDescription(code) {
    let description = '';

    if (code === -1) {
        description = "Trace rain";
    } else if (code === 0) {
        description = "Clear night";
    } else if (code === 1) {
        description = "Sunny day";
    } else if (code === 2) {
        description = "Partly cloudy (night)";
    } else if (code === 3) {
        description = "Partly cloudy (day)";
    } else if (code === 4) {
        description = "Not used";
    } else if (code === 5) {
        description = "Mist";
    } else if (code === 6) {
        description = "Fog";
    } else if (code === 7) {
        description = "Cloudy";
    } else if (code === 8) {
        description = "Overcast";
    } else if (code === 9) {
        description = "Light rain shower (night)";
    } else if (code === 10) {
        description = "Light rain shower (day)";
    } else if (code === 11) {
        description = "Drizzle";
    } else if (code === 12) {
        description = "Light rain";
    } else if (code === 13) {
        description = "Heavy rain shower (night)";
    } else if (code === 14) {
        description = "Heavy rain shower (day)";
    } else if (code === 15) {
        description = "Heavy rain";
    } else if (code === 16) {
        description = "Sleet shower (night)";
    } else if (code === 17) {
        description = "Sleet shower (day)";
    } else if (code === 18) {
        description = "Sleet";
    } else if (code === 19) {
        description = "Hail shower (night)";
    } else if (code === 20) {
        description = "Hail shower (day)";
    } else if (code === 21) {
        description = "Hail";
    } else if (code === 22) {
        description = "Light snow shower (night)";
    } else if (code === 23) {
        description = "Light snow shower (day)";
    } else if (code === 24) {
        description = "Light snow";
    } else if (code === 25) {
        description = "Heavy snow shower (night)";
    } else if (code === 26) {
        description = "Heavy snow shower (day)";
    } else if (code === 27) {
        description = "Heavy snow";
    } else if (code === 28) {
        description = "Thunder shower (night)";
    } else if (code === 29) {
        description = "Thunder shower (day)";
    } else if (code === 30) {
        description = "Thunder";
    } else {
        description = "Unknown weather code";
    }

    return description;
}

document.getElementById("places-list").onchange = () => {
    if (document.getElementById("places-list").value == "plymouth"){
        plymouth();
    }
    else if (document.getElementById("places-list").value == "newquay"){
        newquay();
    }
    else if (document.getElementById("places-list").value == "carlonBay"){
        carlyonBay();
    }
    else if (document.getElementById("places-list").value == "stIves"){
        stIves();
    }
    else if (document.getElementById("places-list").value == "userChoice"){
        userChoice();
    }
}