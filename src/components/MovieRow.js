import classes from "./MovieRow.module.css";
import { useEffect, useState} from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";


const MovieRow = (props) => {
  const [movies,setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const opciones = {  
    height: '390', //pixeles
    width: '100%',
    playerVars: {  //se da el autoplay
      autoplay: 1,
    },
  }

  const baseUrlimg="https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetcher = async () => {
      setIsLoading(true);
      const response = await fetch(props.url);
      const data = await response.json();
      setMovies(data.results);    
      setIsLoading(false);
    };

    fetcher();
  }, [props.url]);

  const trailerHandler = (movie) => {
    if (trailerURL) {
      setTrailerURL(""); //cierra si ya estaba abierto
    } else {
      movieTrailer( null, { tmdbId: movie.id } ).then((url)=>{
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerURL(urlParams.get("v")); //la v del url
      }) //con el paquete instalado movie-trailer
  }
};


  let content = <></>;
  if (JSON.stringify(movies) !== '[]')
   {
    content = 
     <>
      <div className={classes.rowWrapper}>
        {movies.map((movie) => (
            <img 
            onClick={() => trailerHandler(movie)} //Asi, devido a que devo pasar la pelicula
            key={movie.id}
            className={classes.rowImage}
            src={`${baseUrlimg}${movie.poster_path}`} alt={movie.name}
             />
            
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opciones}/>}
     </>
   };


  return (
    <div className={classes.text}>
      <h2 style={{marginBottom:'-20px'}}>{props.title}</h2>
      {isLoading && <p>Loading...</p>}
      {!isLoading && content}
    </div>
  );
};

export default MovieRow;
