
var apikey = 'VcXVvrZqh1bwyvCeGQQgoMomydmwFLtm',
    //this key filters to only music events
    musicSegmentId = 'KZFzniwnSyZfZ7v7nJ',
    //folk genre is KnvZfZ7vAva
    // genre_id = 'KnvZfZ7vAva',
    genre_id = '*',
    size = 200,
    // builtUrl = `https://app.ticketmaster.com/discovery/v2/events.json?classificationId=${musicSegmentId}&size=${size}&apikey=${apikey}`
    builtUrl = `https://app.ticketmaster.com/discovery/v2/classifications/KZFzniwnSyZfZ7v7nE.json?apikey=${apikey}`

function testapi(builtUrl){
    $.ajax({
        type:"GET",
        url:builtUrl,
        async:true,
        dataType: "json",
        success: function(json) {
                    console.log(json);
                },
        error: function(xhr, status, err) {
                    // This time, we do not end up here!
                }
        });
    };


document.addEventListener('DOMContentLoaded',testapi(builtUrl))