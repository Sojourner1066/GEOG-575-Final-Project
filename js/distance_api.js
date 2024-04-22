// Replace 'YOUR_BING_MAPS_API_KEY' with your actual Bing Maps API key
const apiKey = 'AnlY8QF0iexa84_PKbKa68Gevl_aafwuBNTi1CapzJCtXldlgqnJ7LOaZ30ux9XB';

// Define the start and end coordinates (latitude, longitude)
const startCoord = '47.6062,-122.3321'; // Example: Seattle, WA
const endCoord = '34.0522,-118.2437'; // Example: Los Angeles, CA

// Construct the request URL
const apiUrl = `https://dev.virtualearth.net/REST/v1/Routes/Driving?waypoint.1=${startCoord}&waypoint.2=${endCoord}&distanceUnit=mi&key=${apiKey}`;

// Make a GET request to the Bing Routes API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    //console.log(data)
    // Parse the response data
     const route = data.resourceSets[0].resources[0];
     const travelDistance = route.travelDistance;
     const travelDuration = route.travelDuration;

    // Output route information
    console.log('Route calculated successfully:');
    console.log(`Distance: ${travelDistance} miles`);
    console.log(`Duration: ${travelDuration} seconds`);
  })
  .catch(error => {
    console.error('Error calculating route:', error);
  });
