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

const getMovie = (container, movie) => {
  let image = document.createElement("img");
  displayMovie(image, movie, container);
  image.addEventListener("click", async (event) => {
    event.preventDefault();
    let id = movie.id;
    let movieName = await fetchMovie(id);
    displayModale(movieName);
  });
};

const displayMovie = async (image, current, container, isNetflix = false) => {
  let movie = document.createElement("div");
  if (isNetflix) {
    movie.className = "movies__container--movie__netflix";
    image.src = `https://image.tmdb.org/t/p/original/${current.poster_path}`;
  } else {
    movie.className = "movies__container--movie";
    image.src = `https://image.tmdb.org/t/p/original/${current.backdrop_path}`;
  }

  image.className = "movies__container--movie-image";
  if (current.backdrop_path === null) {
    image.src = "./img/Logo_Netflix.jpg";
  }
  container.appendChild(movie);
  movie.appendChild(image);
};

const displayModale = (movieName, callback = null) => {
  let modaleContainer = document.querySelector(".modale-container");
  modaleContainer.style.display = "block";

  modaleContainer.innerHTML = callback ? callback(movieName) : ModaleMovies(movieName);
  modaleContainer.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movieName.backdrop_path})`;
  modaleContainer.style.backgroundSize = "cover";
  let button = modaleContainer.querySelector(".modaleButton");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    let modale = modaleContainer.querySelector("#modale");
    modaleContainer.removeChild(modale);
    modaleContainer.style.backgroundImage = "";
    modaleContainer.style.display = "none";
  });
};

// SERIES NETFLIX ORIGINALS ////////////////////////////////////////////////////////////////
(async () => {
  let netflixOriginals = await fetchNetflixOriginals();
  let container = document.getElementById("movies-container-1");
  let movies = netflixOriginals.results;

  for (let i = 0; i < movies.length; i++) {
    // getMovie(container, movies[i], "modaleNetflixOriginals")
    let image = document.createElement("img");
    displayMovie(image, movies[i], container, true);
    image.addEventListener("click", async (event) => {
      event.preventDefault();
      let id = movies[i].id;
      let movieName = await fetchNetflixDescription(id);
      displayModale(movieName, ModaleSeries);
    });
  }
})();

const displaySections = async (className, callback, genre = null) => {
  let container = document.getElementById(className);
  let res = await callback(genre);
  let movies = res.results;
  for (let i = 0; i < movies.length; i++) getMovie(container, movies[i]);
};

// FILMS TENDANCE ////////////////////////////////////////////////////////////////////////
(async () => {
  displaySections("movies-container-2", fetchTrending);
  displaySections("movies-container-3", fetchTopRated);
  displaySections("movies-container-4", fetchByGenreMovies, 28);


})();

// FILMS LES MIEUX NOTES //////////////////////////////////////////////////////////////
// FILMS PAR GENRE ////////////////////////////////////////////////////////////////////
// Films par genre : ACTION //////////////////////////////////////////////////////////
// Films par genre : COMEDY /////////////////////////////////////////////////////////////
(async () => {
  let netflixByGenreComedy = await fetchByGenreMovies(35);
  let container = document.getElementById("movies-container-5");
  let movies = netflixByGenreComedy.results;

  for (let i = 0; i < movies.length; i++) {
    getMovie(container, movies[i]);
  }
})();

// Films par genre : DOCUMENTARY ///////////////////////////////////////////////////////
(async () => {
  let netflixByGenreDocumentary = await fetchByGenreMovies(99);
  let container = document.getElementById("movies-container-6");
  let movies = netflixByGenreDocumentary.results;

  for (let i = 0; i < movies.length; i++) {
    getMovie(container, movies[i]);
  }
})();
