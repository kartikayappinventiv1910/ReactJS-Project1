import React, { useState, useEffect } from "react";

function WeatherApp() {
  const [city, setCity] = useState();
  const [weatherList] =useState([]);

  const apikey = "3265874a2c77ae4a04bb96236a642d2f";
  const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

  async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), { origin: "cors" });
    const respData = await resp.json();

    // console.log(respData,"respData");

    addWeatherToPage(respData);
  }
  function addWeatherToPage(data) {
    // const temp = KtoC(data.main.temp);
    console.log(data.name);
    console.log(data.main);

    // const weather = document.createElement("div");
    // weather.classList.add("weather");

    // weather.innerHTML = `
    //     <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
    //     <small>${data.weather[0].main}</small>
    // `;

    // // cleanup
    // main.innerHTML = "";

    // main.appendChild(weather);
  }
  function KtoC(K) {
    return Math.floor(K - 273.15);
  }

  function handleSubmit() {
    if (city) {
      getWeatherByLocation(city);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit()}>
        <input
          type="text"
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search by location"
          autocomplete="off"
        />
        <button type="submit">search</button>
      </form>
      
    </>
  );
}

export default WeatherApp;

// const key = "API_KEY";
//   const [feels_like, setFeelsLike] = useState("");
//   const [mainTemp, setMainTemp] = useState("");
//   const [description, setDescription] = useState("");
//   const [main, setMain] = useState("");
//   const [iconID, setIconID] = useState("");
//   useEffect(() => {
//     fetch(
//       "https://api.openweathermap.org/data/2.5/weather?q=Karachi,pk&APPID=" +
//         key +
//         "&units=metric"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setFeelsLike(data.main.feels_like);
//         setMainTemp(data.main.temp);
//         setDescription(data.weather[0].description);
//         setMain(data.weather[0].main);
//         setIconID(data.weather[0].icon);
//       });
//   }, []);

{
  /* <h1>Main Temperature : {mainTemp} Degrees Celsius</h1>
      <h1>Feels like: {feels_like} Degrees Celsius</h1>
      <h1>Weather Parameter: {main}</h1>
      <h1>Description : {description}</h1>
      <img src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"} /> */
}
