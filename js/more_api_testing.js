// Define Ticketmaster API endpoint and parameters
const url = "https://app.ticketmaster.com/discovery/v2/events.json";
const artistId = "K8vZ917QTXV"; // Replace with the ID of the artist you're interested in
const apiKey = "VcXVvrZqh1bwyvCeGQQgoMomydmwFLtm"; // Replace with your Ticketmaster API key

// Parameters for the query
const params = {
  apikey: apiKey,
  attractionId: artistId
};

// Construct query URL with parameters
const queryString = new URLSearchParams(params).toString();
const queryUrl = `${url}?${queryString}`;

// Make the API request
fetch(queryUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Extract event information from the response
    const events = data._embedded.events;
    events.forEach(event => {
      const eventName = event.name;
      venues = event._embedded.venues;
      venues.forEach(venue => {
        const venueName = venue.name;
        const latitude = venue.location.latitude;
        const longitude = venue.location.longitude;
        console.log(venueName,latitude,longitude);
      })
      //const venue = event._embedded.venues[0]; // Assuming one venue per event
      
    // });
  })
})
  .catch(error => {
    console.error("Error:", error);
  });
