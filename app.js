window.addEventListener("load", () => {
  /* It's declaring two variables which represent longitude and latitude. */
  let long, lat;

 /* It's checking if the browser supports geolocation. If it does, it will get the current position of the user. */
  if (!navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      /* It's a 2 constants group where i put API Private Key and the API source. */
      const apiKey = "70dab94ce4f600bc2533e557606e73d6";
      const api = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid="+apiKey;

      document.getElementById("api-label").textContent = "It's working! Let's check by clicking on me.";
      document.getElementById("api-label").target = "_blank";
      document.getElementById("api-label").href = api;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("Hey! That's your debugging data.\n" + data);
        });
    });
  }else if(navigator.geolocation){
      console.log("Please, grant location permissions");
      document.getElementById("api-label").textContent = "Please, grant location permissions to continue developing. Tap me to reload after that.";
  }
});
