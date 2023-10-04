const api =
  'https://api.open-meteo.com/v1/forecast?latitude=-7.2492&longitude=112.7508&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,weathercode';

infoValidBMKG = () => {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      const currentWeather = data.current_weather;

      // date and time formatting
      const parsedTime = new Date(currentWeather.time);
      const currentTime = parsedTime.toLocaleString();

      // get weather condition
      const weatherCode = currentWeather.weathercode;

      const weatherCondition = {
        0: 'Langit cerah',
        1: 'Cerah',
        2: 'Berawan',
      };

      const weatherNow = weatherCondition[weatherCode] || 'Unknown';

      document.querySelector('#temp').textContent = currentWeather.temperature;
      document.querySelector('#w-speed').textContent = currentWeather.windspeed;
      document.querySelector('#w-direction').textContent =
        currentWeather.winddirection;
      document.querySelector('#time').textContent = currentTime;
      document.querySelector('#weather').textContent = weatherNow;
    })
    .catch((err) => {
      console.log('Error: ', err);
    });
};

infoValidBMKG();
