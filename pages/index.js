import Head from "next/head";
import { useEffect, useState } from "react";
import { HomeContents } from "../components/Home/HomeContents";
import Axios from "axios";
export default function Home() {
  const [getDate, setGetDate] = useState(0);
  const [locationWeather, setLocationWeather] = useState({
    place: "",
    temp: "",
  });
  const [weatherData, setWeatherData] = useState();
  function getTime() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    setGetDate(time);
  }

  setInterval(getTime, 1000);

  const API_KEY = "5f2a84c0efe337ed3aa921a02476140c";

  function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
      latitude: latitude,
      longitude: longitude,
    };
    localStorage.setItem("coords", JSON.stringify(coordsObj));
  }

  function handleGeoError(err) {
    console.log("can't access");
    console.log(err);
  }

  useEffect(() => {
    const weather = localStorage.getItem("coords");
    if (weather === null) {
      return navigator.geolocation.getCurrentPosition(
        handleGeoSucces,
        handleGeoError
      );
    } else {
      const { latitude, longitude } = JSON.parse(weather);
      const getWeather = async (lat, long) => {
        await Axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric
          `
        )
          .then((res) => res.data)
          .then((data) => setWeatherData(data));
      };
      getWeather(latitude, longitude);
    }
  }, []);

  useEffect(() => {
    if (weatherData) {
      setLocationWeather({
        place: weatherData.name,
        temp: Math.floor(weatherData.main.temp),
      });
    }
  }, [weatherData]);

  if (getDate === 0) {
    return <div>로딩...</div>;
  }

  return (
    <div>
      <Head>
        <title>StarterPage</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <HomeContents getDate={getDate} />
      <div>
        @{locationWeather.place}/ {locationWeather.temp}℃
      </div>
    </div>
  );
}
