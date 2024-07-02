

// Function to fetch and parse the JSON data
async function fetchData() {
    try {
      // Make the API call
      const response = await fetch(url,options)
  
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Parse the JSON response
      const data = await response.json();
  
      
  
      // Output specific values from the JSON
      
      
      let code = data.features[0].properties.timeSeries[1].daySignificantWeatherCode;
      let weatherDescription = getWeatherDescription(code);
      console.log(`Weather description for code ${code}: ${weatherDescription}`);
  
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  let url = "https://data.hub.api.metoffice.gov.uk/sitespecific/v0/point/daily?longitude=-4.142657&latitude=50.375458&includeLocationName=true" 
  let options = { 
      headers : {
          apikey : "eyJ4NXQiOiJOak16WWpreVlUZGlZVGM0TUdSalpEaGtaV1psWWpjME5UTXhORFV4TlRZM1ptRTRZV1JrWWc9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjYjM1ODg3MEBjYWxseXdpdGguYWMudWtAY2FyYm9uLnN1cGVyIiwiYXBwbGljYXRpb24iOnsib3duZXIiOiJjYjM1ODg3MEBjYWxseXdpdGguYWMudWsiLCJ0aWVyUXVvdGFUeXBlIjpudWxsLCJ0aWVyIjoiVW5saW1pdGVkIiwibmFtZSI6InNpdGVfc3BlY2lmaWMtMzEwYmNkM2UtZTNlMy00MzhhLThmYzYtZDVhYTljYTRlNzhhIiwiaWQiOjUwNzYsInV1aWQiOiIxMDk3OTdmMC02YmIyLTRiNDUtOTBkNi02NWM4N2ZjMjYxOGUifSwiaXNzIjoiaHR0cHM6XC9cL2FwaS1tYW5hZ2VyLmFwaS1tYW5hZ2VtZW50Lm1ldG9mZmljZS5jbG91ZDo0NDNcL29hdXRoMlwvdG9rZW4iLCJ0aWVySW5mbyI6eyJ3ZGhfc2l0ZV9zcGVjaWZpY19mcmVlIjp7InRpZXJRdW90YVR5cGUiOiJyZXF1ZXN0Q291bnQiLCJncmFwaFFMTWF4Q29tcGxleGl0eSI6MCwiZ3JhcGhRTE1heERlcHRoIjowLCJzdG9wT25RdW90YVJlYWNoIjp0cnVlLCJzcGlrZUFycmVzdExpbWl0IjowLCJzcGlrZUFycmVzdFVuaXQiOiJzZWMifX0sImtleXR5cGUiOiJQUk9EVUNUSU9OIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiU2l0ZVNwZWNpZmljRm9yZWNhc3QiLCJjb250ZXh0IjoiXC9zaXRlc3BlY2lmaWNcL3YwIiwicHVibGlzaGVyIjoiSmFndWFyX0NJIiwidmVyc2lvbiI6InYwIiwic3Vic2NyaXB0aW9uVGllciI6IndkaF9zaXRlX3NwZWNpZmljX2ZyZWUifV0sInRva2VuX3R5cGUiOiJhcGlLZXkiLCJpYXQiOjE3MTk4Mzk5MDksImp0aSI6ImMxNDYzN2Q1LWExNjAtNDQxMS04OTVjLTE1NWJhNTlmNWMzNCJ9.NG8khpdheEjaY_oxbXHpeuGjNYJm2zAwVl4rsrffA9YB3RSMDLFWTdnesjWGonljuUE8RqwXXGLPItdZRC8GvNSizMZMFr9ozYDjiRGO5W1k1SeWoFG_4RtZr-nJDcW1KsHbNvLrBT2utV-k3NCP0a9pZf9dofKyDzK4lF6Femnxcg8k_Uz6FCaIvJtoB7bpbhOXso7g28SdWsm__SA4dvwP9jLYGy2jAFQm-mClolcXpEDXDJeQ_I8Gh_u18kzZW00jdHpvUHNY_3zVzjqOeDsqEL-_0XfXFQbFQoGiUvbdoCpIwzxaHuHwlJIFFsl1hnDbTcJ-NpFiw7rF2jTurQ=="
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