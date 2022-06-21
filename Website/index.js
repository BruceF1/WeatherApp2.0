fetch("https://api.stormglass.io/forecast?lat=33.918861&lng=18.423300", {
  headers: {
    "Authentication-Token": "097f4d40-f08d-11ec-91f7-0242ac130002-097f4db8-f08d-11ec-91f7-0242ac130002"  
  }
}).then(function(response) {
  var jsonData = response.json();
  console.log (response.json);
  document.getElementById("myText").innerHTML = JSON.stringify(jsonData);
});