import GoogleMapsLoader from 'google-maps';
import markerImageBlack from '../../images/marker_black.svg';

const loadMarkers = function(googleObj, map, data) {
  console.log(data)
  if(data) {
    if(data.google_maps) {
      var adress = data.google_maps;
      //var marker = null;
      var infowindowContent = '';

      var marker = new googleObj.maps.Marker({
        position: new googleObj.maps.LatLng(parseFloat(adress.lat), parseFloat(adress.lng)),
        map: map,
        icon: {
          url: markerImageBlack,
          scaledSize: new googleObj.maps.Size(30, 30),
        },
        title: 'Jacques Mennel Landschaftsarchitekt BSLA',
      });

      infowindowContent =
        `<div class='infowindow'>
          <p>
            <a
              class="reference"
              target="_blank"
              href='https://www.google.ch/maps/dir//Badenerstrasse+415,+8003+Z%C3%BCrich/@47.3796684,8.503839,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47900a3024887c8f:0xe40c45877e1b8d94!2m2!1d8.506033!2d47.3796684!3e0?hl=de'>
                zur Wegbeschreibung
              </a>
            </p>
        </div>`;

      var infowindow = new googleObj.maps.InfoWindow({
        content: infowindowContent,
      });

      marker.addListener('click', function() {
        infowindow.close();
        infowindow.open(map, marker);
      });

      googleObj.maps.event.addListener(map, 'click', function() {
        if (infowindow) {
            infowindow.close();
        }
      });
    }
  }
}


const initMap = function(domNodeId, mapStyle, googleMapsPin) {
  console.log('init map');

  GoogleMapsLoader.LANGUAGE = 'de';
  GoogleMapsLoader.REGION = 'CH';
  GoogleMapsLoader.KEY = 'AIzaSyAFMLaXF7CDtc2cY4-VqX-xVKhfb8tZS7o';
  GoogleMapsLoader.VERSION = '3.34';
  GoogleMapsLoader.load(function(google) {
    let map = new google.maps.Map(document.getElementById(domNodeId), {
      center: {lat: 47.3796684, lng: 8.506033000000002},
      zoom: 14,
      styles: mapStyle,
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: false,
      heading: 45,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
      },
    });

    loadMarkers(google, map, googleMapsPin)
  });

}

export default initMap;
