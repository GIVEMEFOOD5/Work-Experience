
function plymouth() {
    let url = "https://data.hub.api.metoffice.gov.uk/sitespecific/v0/point/daily?longitude=-4.142657&latitude=50.375458&includeLocationName=true" 
    let options = { 
        headers : {
            apikey : "eyJ4NXQiOiJOak16WWpreVlUZGlZVGM0TUdSalpEaGtaV1psWWpjME5UTXhORFV4TlRZM1ptRTRZV1JrWWc9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjYjM1ODg3MEBjYWxseXdpdGguYWMudWtAY2FyYm9uLnN1cGVyIiwiYXBwbGljYXRpb24iOnsib3duZXIiOiJjYjM1ODg3MEBjYWxseXdpdGguYWMudWsiLCJ0aWVyUXVvdGFUeXBlIjpudWxsLCJ0aWVyIjoiVW5saW1pdGVkIiwibmFtZSI6InNpdGVfc3BlY2lmaWMtMzEwYmNkM2UtZTNlMy00MzhhLThmYzYtZDVhYTljYTRlNzhhIiwiaWQiOjUwNzYsInV1aWQiOiIxMDk3OTdmMC02YmIyLTRiNDUtOTBkNi02NWM4N2ZjMjYxOGUifSwiaXNzIjoiaHR0cHM6XC9cL2FwaS1tYW5hZ2VyLmFwaS1tYW5hZ2VtZW50Lm1ldG9mZmljZS5jbG91ZDo0NDNcL29hdXRoMlwvdG9rZW4iLCJ0aWVySW5mbyI6eyJ3ZGhfc2l0ZV9zcGVjaWZpY19mcmVlIjp7InRpZXJRdW90YVR5cGUiOiJyZXF1ZXN0Q291bnQiLCJncmFwaFFMTWF4Q29tcGxleGl0eSI6MCwiZ3JhcGhRTE1heERlcHRoIjowLCJzdG9wT25RdW90YVJlYWNoIjp0cnVlLCJzcGlrZUFycmVzdExpbWl0IjowLCJzcGlrZUFycmVzdFVuaXQiOiJzZWMifX0sImtleXR5cGUiOiJQUk9EVUNUSU9OIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiU2l0ZVNwZWNpZmljRm9yZWNhc3QiLCJjb250ZXh0IjoiXC9zaXRlc3BlY2lmaWNcL3YwIiwicHVibGlzaGVyIjoiSmFndWFyX0NJIiwidmVyc2lvbiI6InYwIiwic3Vic2NyaXB0aW9uVGllciI6IndkaF9zaXRlX3NwZWNpZmljX2ZyZWUifV0sInRva2VuX3R5cGUiOiJhcGlLZXkiLCJpYXQiOjE3MTk4Mzk5MDksImp0aSI6ImMxNDYzN2Q1LWExNjAtNDQxMS04OTVjLTE1NWJhNTlmNWMzNCJ9.NG8khpdheEjaY_oxbXHpeuGjNYJm2zAwVl4rsrffA9YB3RSMDLFWTdnesjWGonljuUE8RqwXXGLPItdZRC8GvNSizMZMFr9ozYDjiRGO5W1k1SeWoFG_4RtZr-nJDcW1KsHbNvLrBT2utV-k3NCP0a9pZf9dofKyDzK4lF6Femnxcg8k_Uz6FCaIvJtoB7bpbhOXso7g28SdWsm__SA4dvwP9jLYGy2jAFQm-mClolcXpEDXDJeQ_I8Gh_u18kzZW00jdHpvUHNY_3zVzjqOeDsqEL-_0XfXFQbFQoGiUvbdoCpIwzxaHuHwlJIFFsl1hnDbTcJ-NpFiw7rF2jTurQ=="
        }
    }
    fetch(url, options).then(function(response) {
        return response.json();
    }).then(function(data) {
        const values = ["time", "daySignificantWeatherCode", "dayMaxScreenTemperature", "nightMinScreenTemperature", "midday10MWindSpeed", "dayProbabilityOfRain"];
        const container = document.getElementById('ply');

        for (let i of values){
            console.log(`${i}: ${data.features[0].properties.timeSeries[1].time}`);
            const valueBox = document.createElement('div');
            valueBox.style.margin = '20px';
            valueBox.style.border = 'solid';
            valueBox.style.borderColor = 'White';
            valueBox.style.padding = '10px';
            valueBox.style.borderRadius = '20px';
            valueBox.innerHTML = `<b>${i}:</b> ${data.features[0].properties.timeSeries[1][i]}`;
            container.appendChild(valueBox);
        }
    })
}

plymouth();

function newquay() {
    let url = "https://data.hub.api.metoffice.gov.uk/sitespecific/v0/point/daily?longitude=-5.080838&latitude=50.416019&includeLocationName=true" 
    let options = { 
        headers : {
            apikey : "eyJ4NXQiOiJOak16WWpreVlUZGlZVGM0TUdSalpEaGtaV1psWWpjME5UTXhORFV4TlRZM1ptRTRZV1JrWWc9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjYjM1ODg3MEBjYWxseXdpdGguYWMudWtAY2FyYm9uLnN1cGVyIiwiYXBwbGljYXRpb24iOnsib3duZXIiOiJjYjM1ODg3MEBjYWxseXdpdGguYWMudWsiLCJ0aWVyUXVvdGFUeXBlIjpudWxsLCJ0aWVyIjoiVW5saW1pdGVkIiwibmFtZSI6InNpdGVfc3BlY2lmaWMtMzEwYmNkM2UtZTNlMy00MzhhLThmYzYtZDVhYTljYTRlNzhhIiwiaWQiOjUwNzYsInV1aWQiOiIxMDk3OTdmMC02YmIyLTRiNDUtOTBkNi02NWM4N2ZjMjYxOGUifSwiaXNzIjoiaHR0cHM6XC9cL2FwaS1tYW5hZ2VyLmFwaS1tYW5hZ2VtZW50Lm1ldG9mZmljZS5jbG91ZDo0NDNcL29hdXRoMlwvdG9rZW4iLCJ0aWVySW5mbyI6eyJ3ZGhfc2l0ZV9zcGVjaWZpY19mcmVlIjp7InRpZXJRdW90YVR5cGUiOiJyZXF1ZXN0Q291bnQiLCJncmFwaFFMTWF4Q29tcGxleGl0eSI6MCwiZ3JhcGhRTE1heERlcHRoIjowLCJzdG9wT25RdW90YVJlYWNoIjp0cnVlLCJzcGlrZUFycmVzdExpbWl0IjowLCJzcGlrZUFycmVzdFVuaXQiOiJzZWMifX0sImtleXR5cGUiOiJQUk9EVUNUSU9OIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiU2l0ZVNwZWNpZmljRm9yZWNhc3QiLCJjb250ZXh0IjoiXC9zaXRlc3BlY2lmaWNcL3YwIiwicHVibGlzaGVyIjoiSmFndWFyX0NJIiwidmVyc2lvbiI6InYwIiwic3Vic2NyaXB0aW9uVGllciI6IndkaF9zaXRlX3NwZWNpZmljX2ZyZWUifV0sInRva2VuX3R5cGUiOiJhcGlLZXkiLCJpYXQiOjE3MTk4Mzk5MDksImp0aSI6ImMxNDYzN2Q1LWExNjAtNDQxMS04OTVjLTE1NWJhNTlmNWMzNCJ9.NG8khpdheEjaY_oxbXHpeuGjNYJm2zAwVl4rsrffA9YB3RSMDLFWTdnesjWGonljuUE8RqwXXGLPItdZRC8GvNSizMZMFr9ozYDjiRGO5W1k1SeWoFG_4RtZr-nJDcW1KsHbNvLrBT2utV-k3NCP0a9pZf9dofKyDzK4lF6Femnxcg8k_Uz6FCaIvJtoB7bpbhOXso7g28SdWsm__SA4dvwP9jLYGy2jAFQm-mClolcXpEDXDJeQ_I8Gh_u18kzZW00jdHpvUHNY_3zVzjqOeDsqEL-_0XfXFQbFQoGiUvbdoCpIwzxaHuHwlJIFFsl1hnDbTcJ-NpFiw7rF2jTurQ=="
        }
    }
    fetch(url, options).then(function(response) {
        return response.json();
    }).then(function(data) {
        const values = ["time", "daySignificantWeatherCode", "dayMaxScreenTemperature", "nightMinScreenTemperature", "midday10MWindSpeed", "dayProbabilityOfRain"];
        const container = document.getElementById('new');

        for (let i of values){
            console.log(`<b>${i}:</b> ${data.features[0].properties.timeSeries[1][i]}`)
            const valueBox = document.createElement('div');
            valueBox.style.margin = '20px';
            valueBox.style.border = 'solid';
            valueBox.style.borderColor = 'White';
            valueBox.style.padding = '10px';
            valueBox.style.borderRadius = '20px';
            valueBox.innerHTML = `<b>${i}:</b> ${data.features[0].properties.timeSeries[1][i]}`;
            container.appendChild(valueBox);
        }
    })
}

newquay();