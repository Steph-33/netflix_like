import fetchMovie from "./apiService.js";
import Header from "./components/Header.mjs";
import { ModaleSeries } from "./components/Modales.mjs";
import { ModaleMovies } from "./components/Modales.mjs";
import { fetchNetflixOriginals } from "./apiService.js";
import { fetchTrending } from "./apiService.js";
import { fetchTopRated } from "./apiService.js";
import { fetchByGenreMovies } from "./apiService.js";
import { fetchNetflixDescription } from "./apiService.js";
import { displayRechercheMovie } from "./input.js";


// APPEL DE LA FONCTION displayRechercheMovie IMPORTEE DE input.js POUR LA RECHERCHE D'UN FILM
// PAR SON NOM DANS LA BARRE DE RECHERCHE ///////////////////////////////////////////////////
displayRechercheMovie();


// DIFFERENTES METHODES POUR RECUPERER LES INFOS POUR LE HEADER /////////////////////////////

// (() => {
  //Callback
//   const getResponse = (data) => {
//     return data;
//   };
//   try {
//     let movie = fetchMovie(157336, getResponse);
//     console.log(movie);
//     document.getElementById("header").innerHTML = Header(movie);
//     document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
//   }
//   catch(e){
//     console.log(e)
//   }

// })();

//2
// (() => {
//     let movie = fetchMovie(157336).then(movie => {
//         console.log(movie)
//         document.getElementById("header").innerHTML = Header(movie);
//         document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
//     })

// })();

//3
(async () => {
    let movie = await fetchMovie(181812);
    document.getElementById("header").innerHTML = Header(movie);
    document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
})();

// FACTORISATION DISPLAY MOVIES ////////////////////////////////////////////////////////////////////////////////
const displayMovie = async(movies,i,container,isNetflix = false) => {
  let movie = document.createElement('div');
  let image = document.createElement('img');
  if(isNetflix){
    movie.className = "movies__container--movie__netflix";
    image.className = "movies__container--movie-image";
    image.src = `https://image.tmdb.org/t/p/original/${movies[i].poster_path}`;
    if(movies[i].poster_path === null){
      image.src = './img/Logo_Netflix.jpg';
    }
  }else{
    movie.className = "movies__container--movie";
    image.className = "movies__container--movie-image";
    image.src = `https://image.tmdb.org/t/p/original/${movies[i].backdrop_path}`;
    if(movies[i].backdrop_path === null){
      image.src = './img/Logo_Netflix.jpg';
    }
  }
  let id = movies[i].id;
  container.appendChild(movie);
  movie.appendChild(image);
    
  image.addEventListener('click', async(event) => {
    event.preventDefault();   
    let modale = document.querySelector('.modale_container');
    modale.style.display = 'block';
    if(isNetflix){
      let serieName = await fetchNetflixDescription(id);
      modale.innerHTML = ModaleSeries(serieName);    
      modale.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${serieName.backdrop_path})`;  
    }else{
      let movieName = await fetchMovie(id); 
      modale.innerHTML = ModaleMovies(movieName);
      modale.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movieName.backdrop_path})`;      
    }
    modale.style.backgroundSize = 'cover';
    let button = modale.querySelector('.modaleButton');
    button.addEventListener('click', (event) => {
      event.preventDefault();
      let modaleDiv = modale.querySelector('#modale');
      modale.removeChild(modaleDiv)
      modale.style.backgroundImage = "";
      modale.style.display = "none";
    });
  });
}

// SERIES NETFLIX ORIGINALS ////////////////////////////////////////////////////////////////
(async() => {
  let netflixOriginals = await fetchNetflixOriginals();
  let container = document.getElementById("movies-container-1");
  let movies = netflixOriginals.results;
  for(let i = 0 ; i < movies.length ; i++){
    displayMovie(movies,i,container,true); 
  }    
})();

// FILMS TENDANCE ////////////////////////////////////////////////////////////////////////
(async() => {
  let netflixTrending = await fetchTrending();
  let container = document.getElementById("movies-container-2");
  let movies = netflixTrending.results;
  for(let i = 0 ; i < movies.length ; i++){
    displayMovie(movies,i,container); 
  }    
})();

// FILMS LES MIEUX NOTES //////////////////////////////////////////////////////////////
(async() => {
  let netflixTopRated = await fetchTopRated();
  let container = document.getElementById("movies-container-3");
  let movies = netflixTopRated.results;
  for (let i = 0; i < movies.length; i++) {
    displayMovie(movies,i,container); 
  }
})();

// FILMS PAR GENRE ////////////////////////////////////////////////////////////////////

// Films par genre : ACTION //////////////////////////////////////////////////////////
(async() => {
  let netflixByGenreAction = await fetchByGenreMovies(28);
  let container = document.getElementById("movies-container-4");
  let movies = netflixByGenreAction.results;
  for (let i = 0; i < movies.length; i++) {
    displayMovie(movies,i,container); 
  }
})();

// Films par genre : COMEDY /////////////////////////////////////////////////////////////
(async() => {
  let netflixByGenreComedy = await fetchByGenreMovies(35);
  let container = document.getElementById("movies-container-5");
  let movies = netflixByGenreComedy.results;
  for (let i = 0; i < movies.length; i++) {
    displayMovie(movies,i,container); 
  }
})();

// Films par genre : DOCUMENTARY ///////////////////////////////////////////////////////
(async() => {
  let netflixByGenreDocumentary = await fetchByGenreMovies(99);
  let container = document.getElementById("movies-container-6");
  let movies = netflixByGenreDocumentary.results;
  for (let i = 0; i < movies.length; i++) {
    displayMovie(movies,i,container); 
  }
})();