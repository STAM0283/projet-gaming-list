import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [imageOfDay, setImageOfDay] = useState(null);
  const [idImageOfDay, setIdImageOfDay] = useState(0);

  useEffect(() => {
    axios.get("https://wild-games.herokuapp.com/api/v1").then((response) => {
      setImageOfDay(response.data.map((item) => item));
      setIdImageOfDay(Math.floor(Math.random() * 10));
    });
  }, []);
  return imageOfDay !== null ? (
    <div className="home">
      <img src={imageOfDay[idImageOfDay].background_image} alt= {"picture of day : " + idImageOfDay } style = {{width: "60%"}}/>
    </div>
  ) : (
    <p>Pas De Data</p>
  );
};

export default Home;
