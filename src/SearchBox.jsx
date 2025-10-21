import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./SearchBox.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "bb59e997a19845c01d60884561d7e099";

  const getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) throw new Error("City not found");
    let json = await response.json();
    return {
      city,
      temp: json.main.temp,
      tempMin: json.main.temp_min,
      tempMax: json.main.temp_max,
      humidity: json.main.humidity,
      feelsLike: json.main.feels_like,
      weather: json.weather[0].description,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const info = await getWeatherInfo();
      updateInfo(info);
      setCity("");
      setError(false);
    } catch {
      setError(true);
    }
  };

  return (
    <motion.div
      className="SearchBox"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Enter city name"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          sx={{ width: "80%", maxWidth: 300 }}
        />
        <br />
        <Button
          sx={{ mt: 2 }}
          variant="contained"
          type="submit"
          endIcon={<SendIcon />}
        >
          Search
        </Button>
        {error && <p className="error">❌ No such city found!</p>}
      </form>
    </motion.div>
  );
}
