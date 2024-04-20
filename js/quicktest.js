// Define Ticketmaster API endpoint and parameters
const url = "https://app.ticketmaster.com/discovery/v2/events.json";
const apiKey = "VcXVvrZqh1bwyvCeGQQgoMomydmwFLtm"; // Replace with your Ticketmaster API key

// Parameters for the query
const params = {
  apikey: apiKey,
  countryCode: "US", // Filter events by country (United States)
  classificationName: "Music Festival", // Filter events by classification (Music Festival)
  startDateTime: "2024-06-01T00:00:00Z", // Start of the date range (June 1st, 2024)
  endDateTime: "2024-08-31T23:59:59Z" // End of the date range (August 31st, 2024)
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
    console.log(data);
    // Extract festival information from the response
    // const festivals = data._embedded.events;
    // festivals.forEach(festival => {
    //   console.log(festival.name); // Print the name of each festival
    //   console.log(festival.dates.start.localDate); // Print the start date of each festival
    //   console.log(festival.dates.timezone); // Print the timezone of each festival
      // Additional information can be extracted as needed
    // });
  })
  .catch(error => {
    console.error("Error:", error);
  });
