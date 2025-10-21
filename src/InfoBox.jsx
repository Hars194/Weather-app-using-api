import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { motion } from "framer-motion";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://c8.alamy.com/comp/M7YR0T/design-vector-of-illustration-hot-summer-season-M7YR0T.jpg";
  const COLD_URL =
    "https://media.istockphoto.com/id/1040375916/photo/teenage-girl-blowing-nose-on-winter-day.jpg";
  const RAINY_URL =
    "https://cdn.vectorstock.com/i/500p/35/42/rainy-season-paper-umbrella-vector-39133542.jpg";
  const DEFAULT_URL =
    "https://static.vecteezy.com/system/resources/thumbnails/036/060/464/small_2x/synoptic-woman-gives-weather-forecast-participating-in-tv-show.jpg";

  const imgURL =
    info.humidity > 80
      ? RAINY_URL
      : info.temp > 25
      ? HOT_URL
      : info.temp < 15
      ? COLD_URL
      : DEFAULT_URL;

  const WeatherIcon =
    info.humidity > 80
      ? ThunderstormIcon
      : info.temp > 25
      ? WbSunnyIcon
      : AcUnitIcon;

  return (
    <motion.div
      className="InfoBox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <motion.div
        className="cardContainer"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Card className="weather-card" sx={{ maxWidth: 360, borderRadius: 3, boxShadow: 4 }}>
          <CardMedia sx={{ height: 180 }} image={imgURL} title={info.city} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} <WeatherIcon fontSize="large" sx={{ ml: 1 }} />
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
              <div>🌡️ Temperature: {info.temp}°C</div>
              <div>💧 Humidity: {info.humidity}%</div>
              <div>🔼 Max Temp: {info.tempMax}°C</div>
              <div>🔽 Min Temp: {info.tempMin}°C</div>
              <div>
                ☁️ Weather: <b>{info.weather}</b>, Feels like {info.feelsLike}°C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
