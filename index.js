import fetchMovie from "./apiService.js";
import Header from "./components/Header.mjs";
import { Modale } from "./components/Modale.mjs";
import { fetchNetflixOriginals } from "./apiService.js";
import { fetchTrending } from "./apiService.js";
import { fetchTopRated } from "./apiService.js";
import { fetchByGenreMovies } from "./apiService.js";
import { fetchNetflixDescription } from "./apiService.js"
// import DivMovie from "./components/DivMovie.mjs"

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

(async() => {
  let netflixOriginals = await fetchNetflixOriginals();
  let container = document.getElementById("movies-container-1");
  let movies = netflixOriginals.results;
  let subHeader = document.getElementById('modaleNetflixOriginals');

  for(let i = 0 ; i < movies.length ; i++){
    let movie = document.createElement('div');
    movie.className = "movies__container--movie__netflix";
    let image = document.createElement('img');
    image.className = "movies__container--movie-image";
    image.src = `https://image.tmdb.org/t/p/original/${movies[i].poster_path}`;
    let id = movies[i].id;

    (async() => {
      let movieName = await fetchNetflixDescription(id);
    
      image.addEventListener('click', (event) => {
        event.preventDefault();
        subHeader.innerHTML = Modale(movieName);      
        subHeader.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movieName.backdrop_path})`;
        subHeader.style.backgroundRepeat = 'no-repeat';
        subHeader.style.backgroundPositionX = 'right';
        subHeader.style.backgroundSize = '40%';
        let button = subHeader.querySelector('.modaleButton');
        button.addEventListener('click', (event) => {
          event.preventDefault();
          let modale = subHeader.querySelector('#modale');
          subHeader.removeChild(modale)
          subHeader.style.backgroundImage = null;
        });
      });
      container.appendChild(movie);
      movie.appendChild(image);
      if(movies[i].poster_path === null){
        image.style.display = 'none';
      }
    })();
  }    
})();


// FILMS TENDANCE
(async() => {
  let netflixTrending = await fetchTrending();
  let container = document.getElementById("movies-container-2");
  let movies = netflixTrending.results;
  let subHeader = document.getElementById('modaleTrendingNow');

  for(let i = 0 ; i < movies.length ; i++){
    let movie = document.createElement('div');
    movie.className = "movies__container--movie";
    let image = document.createElement('img');
    image.className = "movies__container--movie-image";
    image.src = `https://image.tmdb.org/t/p/original/${movies[i].poster_path}`;
    let id = movies[i].id;

    (async() => {
      let movieName = await fetchNetflixDescription(id);
    
      image.addEventListener('click', (event) => {
        event.preventDefault();
        subHeader.innerHTML = Modale(movieName);      
        subHeader.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movieName.backdrop_path})`;
        subHeader.style.backgroundRepeat = 'no-repeat';
        subHeader.style.backgroundPositionX = 'right';
        subHeader.style.backgroundSize = '40%';
        let button = subHeader.querySelector('.modaleButton');
        button.addEventListener('click', (event) => {
          event.preventDefault();
          let modale = subHeader.querySelector('#modale');
          subHeader.removeChild(modale)
          subHeader.style.backgroundImage = null;
        });
      });

      container.appendChild(movie);
      movie.appendChild(image);
      if(movies[i].poster_path === null){
        image.style.display = 'none';
      }
    })();
  }    
})();


// FILMS LES MIEUX NOTES
(async() => {
  let netflixTopRated = await fetchTopRated();
  let container = document.getElementById("movies-container-3");
  let movies = netflixTopRated.results;

  for (let i = 0; i < movies.length; i++) {
      let movie = document.createElement('div');
      movie.className = "movies__container--movie";
      let image = document.createElement('img');
      image.className = "movies__container--movie-image";
      image.src = `https://image.tmdb.org/t/p/original/${movies[i].poster_path}`;
      container.appendChild(movie);
      movie.appendChild(image);
      if(movies[i].poster_path === null){
        image.style.display = 'none';
      }
  }
})();


// FILMS PAR GENRE

// Code pour obtenir la liste des genres
// (async() => {
//   let movie = await fetchByGenre();
//   console.log(movie)
// })();

// Films par genre : ACTION
(async() => {
  let netflixByGenreAction = await fetchByGenreMovies(28);
  let container = document.getElementById("movies-container-4");
  let movies = netflixByGenreAction.results;

  for (let i = 0; i < movies.length; i++) {
      let movie = document.createElement('div');
      movie.className = "movies__container--movie";
      let image = document.createElement('img');
      image.className = "movies__container--movie-image";
      image.src = `https://image.tmdb.org/t/p/original/${movies[i].poster_path}`;
      container.appendChild(movie);
      movie.appendChild(image);
      if(movies[i].poster_path === null){
        image.style.display = 'none';
      }
  }
})();

// Films par genre : COMEDY
(async() => {
  let netflixByGenreComedy = await fetchByGenreMovies(35);
  let container = document.getElementById("movies-container-5");
  let movies = netflixByGenreComedy.results;

  for (let i = 0; i < movies.length; i++) {
      let movie = document.createElement('div');
      movie.className = "movies__container--movie";
      let image = document.createElement('img');
      image.className = "movies__container--movie-image";
      image.src = `https://image.tmdb.org/t/p/original/${movies[i].poster_path}`;
      container.appendChild(movie);
      movie.appendChild(image);
      if(movies[i].poster_path === null){
        image.style.display = 'none';
      }
  }
})();

// Films par genre : DOCUMENTARY
(async() => {
  let netflixByGenreDocumentary = await fetchByGenreMovies(99);
  let container = document.getElementById("movies-container-6");
  let movies = netflixByGenreDocumentary.results;

  for (let i = 0; i < movies.length; i++) {
      let movie = document.createElement('div');
      movie.className = "movies__container--movie";
      let image = document.createElement('img');
      image.className = "movies__container--movie-image";
      image.src = `https://image.tmdb.org/t/p/original/${movies[i].poster_path}`;
      container.appendChild(movie);
      movie.appendChild(image);
      if(movies[i].poster_path === null){
        image.style.display = 'none';
      }
  }
})();