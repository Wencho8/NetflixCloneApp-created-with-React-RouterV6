
const ApiKey = '9ecc1ce6b26f880fb1017ab0e918ebc3'; 

const URLs = {

trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${ApiKey}`,
nOriginal: `https://api.themoviedb.org/3/discover/tv?api_key=${ApiKey}&with_networks=213`,
TopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US`,
ActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=28`,
ComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=35`,
HorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=27`,
RomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=10749`,
Documentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=99`,

}

export default URLs;