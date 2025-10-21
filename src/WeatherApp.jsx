import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import { motion } from "framer-motion";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 25.31,
    humidity: 65,
    temp: 25.05,
    tempMax: 25.05,
    tempMin: 25.05,
    weather: "haze",
  });

  let updateInfo = (newInfo) => setWeatherInfo(newInfo);

  return (
    <motion.div
      className="weather-app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="title"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        🌦️ Weather App by Harshal
      </motion.h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </motion.div>
  );
}
