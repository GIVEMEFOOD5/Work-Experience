const apiKey = "eyJ4NXQiOiJOak16WWpreVlUZGlZVGM0TUdSalpEaGtaV1psWWpjME5UTXhORFV4TlRZM1ptRTRZV1JrWWc9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJiZG9nYnJpZ2h0QGdtYWlsLmNvbUBjYXJib24uc3VwZXIiLCJhcHBsaWNhdGlvbiI6eyJvd25lciI6ImJkb2dicmlnaHRAZ21haWwuY29tIiwidGllclF1b3RhVHlwZSI6bnVsbCwidGllciI6IlVubGltaXRlZCIsIm5hbWUiOiJzaXRlX3NwZWNpZmljLWI0YzEzZWExLWQwODQtNDk1Ni1iMWY3LWFlYThjMDc2M2RlMCIsImlkIjo1MTYwLCJ1dWlkIjoiYTQ0YTMxY2ItMmM4Yi00MTgyLWE4N2ItZjJlODBkYWEyYmI5In0sImlzcyI6Imh0dHBzOlwvXC9hcGktbWFuYWdlci5hcGktbWFuYWdlbWVudC5tZXRvZmZpY2UuY2xvdWQ6NDQzXC9vYXV0aDJcL3Rva2VuIiwidGllckluZm8iOnsid2RoX3NpdGVfc3BlY2lmaWNfZnJlZSI6eyJ0aWVyUXVvdGFUeXBlIjoicmVxdWVzdENvdW50IiwiZ3JhcGhRTE1heENvbXBsZXhpdHkiOjAsImdyYXBoUUxNYXhEZXB0aCI6MCwic3RvcE9uUXVvdGFSZWFjaCI6dHJ1ZSwic3Bpa2VBcnJlc3RMaW1pdCI6MCwic3Bpa2VBcnJlc3RVbml0Ijoic2VjIn19LCJrZXl0eXBlIjoiUFJPRFVDVElPTiIsInN1YnNjcmliZWRBUElzIjpbeyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6IlNpdGVTcGVjaWZpY0ZvcmVjYXN0IiwiY29udGV4dCI6Ilwvc2l0ZXNwZWNpZmljXC92MCIsInB1Ymxpc2hlciI6IkphZ3Vhcl9DSSIsInZlcnNpb24iOiJ2MCIsInN1YnNjcmlwdGlvblRpZXIiOiJ3ZGhfc2l0ZV9zcGVjaWZpY19mcmVlIn1dLCJ0b2tlbl90eXBlIjoiYXBpS2V5IiwiaWF0IjoxNzIwMDk1Njc2LCJqdGkiOiJiMDAwNTYyZS1hZmNiLTQ5OTMtYmVmNi0yNzM1NWRiYzhiMmMifQ==.Xj4ZMFCeHoaow2T4CkdyA6gkFpWv1xyhBMhVrnNRwvJaNVWrFTll9VkcnJYwWEgW-MKJ6NdxXGZYYCVind_GhMav9GBmgnkEi0DPUpXF3RDXZPI-1J3SsjY-7JfbDFxWB9Wd0wUo-D6ndKOrfSOHxyYajjnX2ki73Brwxp47Yc4F_sixABpZ1W48r4MsLorBXKrCG_TIo_caaknUp-y0JJ9d_208RwinYJDJRf-gVobisc-vkxMOb00suK0vQhIXf1Ee-v7g8U71tXSySHUPFdArh9oVpB6Vba_fCH2SvEBntDZWcvHKhJFnSYUZv1nlIdRjYddUjTA4cAOzTPInEQ==";

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

    let url = `https://data.hub.api.metoffice.gov.uk/sitespecific/v0/point/daily?longitude=${long}&latitude=${lat}`
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