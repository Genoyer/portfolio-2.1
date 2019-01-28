$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '500078569',
        limit: 20,
        resolution: 'standard_resolution',
        accessToken: '500078569.1f8b93f.ed14d043affa464297e989d3a288f140',
        sortBy: 'most-commented',
        template: '<div class="col"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();


});

var map;
function initMap() {
    const home = {
        lat: 26.4615,
        lng: -80.0728
    };
  map = new google.maps.Map(document.getElementById('map'), {
    center: home,
    zoom: 8
  });
}