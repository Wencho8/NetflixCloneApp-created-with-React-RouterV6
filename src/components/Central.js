import MovieRow from "./MovieRow";

import URLs from "./Request";
import Header from "./Header";
import HeaderBar from "../ui/HeaderBar";
import { useEffect, useState } from "react";


const Central = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        handleShow(true);
      }
    });
    return () => {
      window.removeEventListener("scroll"); //Removerlo para que no se quede escuchando
    };
  }, []);


  return (
    <div style={{background: '#111'}}>
      <HeaderBar /> {/* Forma correcta de cambiar state en el hijo.*/}
      <Header />
      <MovieRow title="Originals" url={URLs.trending} />  {/* Props de url a cada row*/}
      <MovieRow title="Trending" url={URLs.nOriginal} />
      {show && <MovieRow title="Comedy" url={URLs.ComedyMovies} />} {/* Si show es true, se renderiza el componente.*/}
      {show && <MovieRow title="Horror" url={URLs.HorrorMovies} />}
      {show && <MovieRow title="Romance" url={URLs.RomanceMovies} />}
      {show && <MovieRow title="Documentary" url={URLs.Documentaries} />}
    </div>
  );
};

export default Central;
