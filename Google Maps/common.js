import initMap from '../util/initMap.js';

// MAPS INIT
$.getJSON('../app/themes/jacquesmennel/resources/assets/scripts/util/mapStyleGrey.json', function(mapStyle){

  $.ajax({
    dataType: 'json',
    beforeSend: function() {
      console.log('fetching siedlungen');
    },
    url: window.location.protocol + '//' + window.location.host + '/wp-json/acf/v3/options/option/google_maps',
    success: function(googleMapsPin) {
      ///console.log(siedlungen);
      initMap('map', mapStyle, googleMapsPin);
    },
    error: function(jqXHR,textStatus,errorThrown) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    },
  })
});