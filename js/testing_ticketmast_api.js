
var apikey = 'VcXVvrZqh1bwyvCeGQQgoMomydmwFLtm',
    //this key filters to only music events
    musicSegmentId = 'KZFzniwnSyZfZ7v7nJ',
    size = 200,
    builtUrl = `https://app.ticketmaster.com/discovery/v2/events.json?classificationId=${musicSegmentId}&size=${size}&apikey=${apikey}`
    // different urls to pull differnt data
    // builtUrl = `https://app.ticketmaster.com/discovery/v2/classifications/genres.json?size=${size}&apikey=${apikey}`
    // builtUrl = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=${apikey}`
    // builtUrl = `https://app.ticketmaster.com/discovery/v2/classifications/genres/KnvZfZ7vA71.json?apikey=${apikey}`
    // Original Example
    //url:"https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=VcXVvrZqh1bwyvCeGQQgoMomydmwFLtm",
    // filter by event music type
    //url:"https://app.ticketmaster.com/discovery/v2/events.json?classificationId=KZFzniwnSyZfZ7v7nJ&size=10&apikey=VcXVvrZqh1bwyvCeGQQgoMomydmwFLtm",

$.ajax({
    type:"GET",
    url:builtUrl,
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
                // Parse the response.
                // Do other things.
                var genre_dict = {}
                for (var i = 0; i < json._embedded.events.length; i++){
                    var genre = json._embedded.events[i].classifications[0].genre
                    if ((genre.name in genre_dict)==false){
                        genre_dict[genre.name] = genre.id
                    };
                };
                console.log(genre_dict)
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });