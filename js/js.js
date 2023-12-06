function initMap() {
  const myLatLng = {lat: 41.83155375445465, lng: -87.62724193181992};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLatLng,
  });

  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">IIT</h1>' +
    '<div id="bodyContent">' +
    "<p><b>IIT</b>, also referred to as <b>Illinois Tech</b>, small private university" +
    "in the south side of Chicago." +
    " It was ranked number 23 in the Wall Street Journals list of college rankings." +
    " It's largest department is the computer science department followed by the ITM department." +
    "</div>" + "</div>";
  
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "IIT",
  });
  
  const marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "IIT",
  }); 

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
  const trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
 }
window.initMap = initMap;
