import React, { useEffect } from "react";
import { useState } from "react";
import URLs from "./Request";
import classes from './Header.module.css';


const Header = () => {

  const [timer, setTimer] = useState(0);  //NOSE SI ESTA BIEN AHCER ESTO CON USEEFFECT, BUSCAR

  const timerHandler = () => {
    setTimer(timer + 1);
  }
  setInterval(timerHandler, 20000)


  useEffect(() => {      //TODO: AGREGAR TIMER PARA QUE CAMBIE

    const fetcher = async () => {

      const response = await fetch(URLs.nOriginal);
      const data = await response.json();
       
      const number = Math.floor(Math.random() * data.results.length - 1); //toma una movie random de las originales.

      console.log(data.results[number]);
      setMovie(data.results[number]);
    };
    fetcher();
  }, []);

  const [movie, setMovie] = useState([]);

  return (
  <header className={classes.header}
  style={{
    backgroundSize: "cover",
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
    backgroundPosition: "center center",
  }}
  >
    <div className={classes.headerContent}>
        <h1 className={classes.headerTitle}>
            {movie.name }
        </h1>
        <div className={classes.headerButtons}>
            <button className={classes.headerButton}>Play</button>
            <button className={classes.headerButton}>My List</button>
        </div>
        <h1 className={classes.headerDescription}>
            {movie.overview}
        </h1>
    </div>
  </header>
  );
};


export default Header;