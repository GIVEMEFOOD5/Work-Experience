

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
  
  // Call the fetchData function
  
   
  fetchData();
  
  
          
  
  
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