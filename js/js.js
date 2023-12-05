function init(){
	let canvas = document.getElementById("canvas");
  let location = new google.maps.LatLng(19.56452649083203, -99.34831743042731);
  let mapOptions = {
    center: location,
    zoom: 8,
  };

  let map = new google.maps.Map(canvas, mapOptions);
	

}

google.maps.event.addDomListener(window, 'load', init);
