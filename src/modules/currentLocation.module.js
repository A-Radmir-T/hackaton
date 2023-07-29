import {Module} from '../core/module'

export class CurrentLocation extends Module {
    static dataType = 'CurrentLocation'
    constructor() {
      super(CurrentLocation.dataType, 'Показать мою геолокацию')
      this.bodyEl = document.querySelector('body')
    }
  
    trigger() {
        const mapDiv = document.createElement('div')
        mapDiv.id = 'googleMap'
        mapDiv.style.height = '90%';
        mapDiv.style.width = '60%';
        mapDiv.style.margin = '0 auto'
        this.bodyEl.append(mapDiv)
        let map = null;
    //   document.getElementById('getLocation').addEventListener('click', function() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            let pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            map = new google.maps.Map(mapDiv, {
              center: pos,
              zoom: 12
            });

            let marker = new google.maps.Marker({
              position: pos,
              map: map
            });
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());

          function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
              'Error: The Geolocation service failed.' :
              'Error: Your browser doesn\'t support geolocation.');
            infoWindow.open(map);
          }
        }
      }
    }