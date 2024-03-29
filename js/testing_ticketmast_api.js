
var apikey = 'VcXVvrZqh1bwyvCeGQQgoMomydmwFLtm',
    musicSegmentId = 'KZFzniwnSyZfZ7v7nJ',
    size = 10,
    builtUrl = `https://app.ticketmaster.com/discovery/v2/events.json?classificationId=${musicSegmentId}&size=${size}&apikey=${apikey}`

$.ajax({
    type:"GET",
    // Original Example
    //url:"https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=VcXVvrZqh1bwyvCeGQQgoMomydmwFLtm",
    
    // filter by event music type
    //url:"https://app.ticketmaster.com/discovery/v2/events.json?classificationId=KZFzniwnSyZfZ7v7nJ&size=10&apikey=VcXVvrZqh1bwyvCeGQQgoMomydmwFLtm",
    url:builtUrl,
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
                // Parse the response.
                // Do other things.
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });