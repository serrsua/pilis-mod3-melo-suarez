import { useState, useEffect } from "react";
import { getWeather } from "../service";
import { WiCloudyGusts, WiCelsius } from "react-icons/wi";

const InfoApi = ({ lat, lon }) => {
  const [dato, setDato] = useState([]);

  useEffect(() => {
    getWeather(lat, lon)
      .then((data) => {
        setDato(data.current_weather);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <h2>
          {dato.temperature}
          <WiCelsius />
        </h2>
      </div>
      <div>
        <h3>
          <WiCloudyGusts /> {dato.windspeed} Km/h
        </h3>
      </div>
    </>
  );
};

export default InfoApi;
