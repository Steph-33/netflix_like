/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apiService.js":
/*!***********************!*\
  !*** ./apiService.js ***!
  \***********************/
/*! exports provided: default, fetchNetflixOriginals, fetchNetflixDescription, fetchTrending, fetchTopRated, fetchByGenreMovies, fetchListMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fetchMovie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchNetflixOriginals\", function() { return fetchNetflixOriginals; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchNetflixDescription\", function() { return fetchNetflixDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchTrending\", function() { return fetchTrending; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchTopRated\", function() { return fetchTopRated; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchByGenreMovies\", function() { return fetchByGenreMovies; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchListMovie\", function() { return fetchListMovie; });\nconst APÎ_URL = \"https://api.themoviedb.org/3/movie/\";\nconst API_KEY = \"3a0449720017ece47d0711bc3f199995\";\n\n//1\n// export function fetchMovie(movieId, cb) {\n//   const url = `${APÎ_URL}${movieId}?api_key=${API_KEY}`;\n\n//     var xhr_object = new XMLHttpRequest();\n//     xhr_object.open(\"GET\", url, false);\n//     xhr_object.send(null);\n\n//     if (xhr_object.readyState == 4) {\n//       return cb(JSON.parse(xhr_object.responseText));\n//     }\n  \n// }\n\n//2\n// export default function fetchMovie(movieId) {\n//   const url = `${APÎ_URL}${movieId}?api_key=${API_KEY}`;\n\n//   return new Promise((resolve, reject) => {\n//     var xhr_object = new XMLHttpRequest();\n//     xhr_object.open(\"GET\", url, false);\n//     xhr_object.send(null);\n\n//     if (xhr_object.readyState == 4) {\n//       resolve(JSON.parse(xhr_object.responseText));\n//     }\n//   });\n// }\n\n// export default function fetchMovie(movieId) {\n//   const url = `${APÎ_URL}${movieId}?api_key=${API_KEY}`;\n//   return fetch(url).then(res => {\n//     return res.json()\n//   }).then(movie => {\n//       return movie;\n//   })\n// }\n\n//3\nasync function fetchMovie(movieId) {\n  const url = `${APÎ_URL}${movieId}?api_key=${API_KEY}`;\n  let res = await fetch(url);\n  let movie = await res.json();\n  return movie;\n}\n\nasync function fetchNetflixOriginals() {\n  const url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;\n  let res = await fetch(url);\n  let netflixOriginals = await res.json();\n  return netflixOriginals;\n}\n\nasync function fetchNetflixDescription(movieId) {\n  const url = `https://api.themoviedb.org/3/tv/${movieId}?api_key=${API_KEY}`;\n  let res = await fetch(url);\n  let movie = await res.json();\n  return movie;\n}\n\nasync function fetchTrending() {\n  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;\n  let res = await fetch(url);\n  let netflixTrending = await res.json();\n  return netflixTrending;\n}\n\nasync function fetchTopRated() {\n  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;\n  let res = await fetch(url);\n  let netflixToprated = await res.json();\n  return netflixToprated;\n}\n\nasync function fetchByGenreMovies(genre) {\n  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}`;\n  let res = await fetch(url);\n  let netflixByGenre = await res.json();\n  return netflixByGenre;\n}\n\nasync function fetchListMovie(search) {\n  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${search}`;\n  let res = await fetch(url);\n  let netflixListMovie = await res.json();\n  return netflixListMovie;\n}\n\n//# sourceURL=webpack:///./apiService.js?");

/***/ }),

/***/ "./components/Header.mjs":
/*!*******************************!*\
  !*** ./components/Header.mjs ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\nfunction Header(props) {\n  return `\n          <div class=\"header__container\">\n            <h1 class=\"header__container-heading\">${props.original_title}</h1>\n            <button class=\"header__container-btnPlay\">\n              Play\n            </button>\n    \n            <button class=\"header__container-btnFavouriteList\">\n              Favourite List\n            </button>\n            <p class=\"header__container-overview\">${props.overview}</p>\n          </div>\n        `;\n}\n\n\n//# sourceURL=webpack:///./components/Header.mjs?");

/***/ }),

/***/ "./components/Modales.mjs":
/*!********************************!*\
  !*** ./components/Modales.mjs ***!
  \********************************/
/*! exports provided: ModaleSeries, ModaleMovies */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModaleSeries\", function() { return ModaleSeries; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModaleMovies\", function() { return ModaleMovies; });\nfunction ModaleSeries(props) {\n    return `\n    <div id=\"modale\">\n        <div role=\"document\" class=\"c-dialog__box\">\n            <h1 class=\"modaleTitle\">${props.original_name || props.original_title}</h1>\n            <div id=\"modaleContainer\">\n                <h2 class=\"modaleVote\">Rated : ${props.vote_average*10}%</h2>\n                <h2 class=\"modaleDate\">Release Date : ${props.release_date || props.first_air_date}</h2>\n                <h2 class=\"modaleEpisode\">Nombre d'épisodes : ${props.number_of_episodes}   Nombre de saisons : ${props.number_of_seasons }</h2>\n            </div>\n            <p class=\"modaleDescription\">${props.overview}</p>\n            <button type=\"button\" class=\"modaleButton\">&#10005;</button>\n            <button class=\"modaleButtonPlay\">&#8227; PLAY</button>\n            <button class=\"modaleButtonMyList\">&#43; MY LIST</button>\n        </div>    \n    </div>`;\n}\n\nfunction ModaleMovies(props) {\n    return `\n    <div id=\"modale\">\n        <div role=\"document\" class=\"c-dialog__box\">\n            <h1 class=\"modaleTitle\">${props.original_name || props.original_title}</h1>\n            <div id=\"modaleContainer\">\n                <h2 class=\"modaleVote\">Rated : ${props.vote_average*10}%</h2>\n                <h2 class=\"modaleDate\">Release Date : ${props.release_date || props.first_air_date}</h2>\n            </div>\n            <p class=\"modaleDescription\">${props.overview}</p>\n            <button type=\"button\" class=\"modaleButton\">&#10005;</button>\n            <button class=\"modaleButtonPlay\">&#8227; PLAY</button>\n            <button class=\"modaleButtonMyList\">&#43; MY LIST</button>\n        </div>    \n    </div>`;\n}\n\n//# sourceURL=webpack:///./components/Modales.mjs?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiService.js */ \"./apiService.js\");\n/* harmony import */ var _components_Header_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header.mjs */ \"./components/Header.mjs\");\n/* harmony import */ var _components_Modales_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Modales.mjs */ \"./components/Modales.mjs\");\n/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input.js */ \"./input.js\");\n\n\n\n\n\n\n\n\n\n\n\n// APPEL DE LA FONCTION displayRechercheMovie IMPORTEE DE input.js POUR LA RECHERCHE D'UN FILM\n// PAR SON NOM DANS LA BARRE DE RECHERCHE ///////////////////////////////////////////////////\nObject(_input_js__WEBPACK_IMPORTED_MODULE_3__[\"displayRechercheMovie\"])();\n\n// DIFFERENTES METHODES POUR RECUPERER LES INFOS POUR LE HEADER /////////////////////////////\n\n// (() => {\n//Callback\n//   const getResponse = (data) => {\n//     return data;\n//   };\n//   try {\n//     let movie = fetchMovie(157336, getResponse);\n//     console.log(movie);\n//     document.getElementById(\"header\").innerHTML = Header(movie);\n//     document.getElementById(\"header\").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;\n//   }\n//   catch(e){\n//     console.log(e)\n//   }\n\n// })();\n\n//2\n// (() => {\n//     let movie = fetchMovie(157336).then(movie => {\n//         console.log(movie)\n//         document.getElementById(\"header\").innerHTML = Header(movie);\n//         document.getElementById(\"header\").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;\n//     })\n\n// })();\n\n//3\n(async () => {\n  let movie = await Object(_apiService_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(181812);\n  document.getElementById(\"header\").innerHTML = Object(_components_Header_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(movie);\n  document.getElementById(\"header\").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;\n})();\n\nconst getMovie = (container, movie) => {\n  let image = document.createElement(\"img\");\n  displayMovie(image, movie, container);\n  image.addEventListener(\"click\", async (event) => {\n    event.preventDefault();\n    let id = movie.id;\n    let movieName = await Object(_apiService_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\n    displayModale(movieName);\n  });\n};\n\nconst displayMovie = async (image, current, container, isNetflix = false) => {\n  let movie = document.createElement(\"div\");\n  if (isNetflix) {\n    movie.className = \"movies__container--movie__netflix\";\n    image.src = `https://image.tmdb.org/t/p/original/${current.poster_path}`;\n  } else {\n    movie.className = \"movies__container--movie\";\n    image.src = `https://image.tmdb.org/t/p/original/${current.backdrop_path}`;\n  }\n\n  image.className = \"movies__container--movie-image\";\n  if (current.backdrop_path === null) {\n    image.src = \"./img/Logo_Netflix.jpg\";\n  }\n  container.appendChild(movie);\n  movie.appendChild(image);\n};\n\nconst displayModale = (movieName, callback = null) => {\n  let modaleContainer = document.querySelector(\".modale-container\");\n  modaleContainer.style.display = \"block\";\n\n  modaleContainer.innerHTML = callback ? callback(movieName) : Object(_components_Modales_mjs__WEBPACK_IMPORTED_MODULE_2__[\"ModaleMovies\"])(movieName);\n  modaleContainer.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movieName.backdrop_path})`;\n  modaleContainer.style.backgroundSize = \"cover\";\n  let button = modaleContainer.querySelector(\".modaleButton\");\n  button.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    let modale = modaleContainer.querySelector(\"#modale\");\n    modaleContainer.removeChild(modale);\n    modaleContainer.style.backgroundImage = \"\";\n    modaleContainer.style.display = \"none\";\n  });\n};\n\n// SERIES NETFLIX ORIGINALS ////////////////////////////////////////////////////////////////\n(async () => {\n  let netflixOriginals = await Object(_apiService_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchNetflixOriginals\"])();\n  let container = document.getElementById(\"movies-container-1\");\n  let movies = netflixOriginals.results;\n\n  for (let i = 0; i < movies.length; i++) {\n    // getMovie(container, movies[i], \"modaleNetflixOriginals\")\n    let image = document.createElement(\"img\");\n    displayMovie(image, movies[i], container, true);\n    image.addEventListener(\"click\", async (event) => {\n      event.preventDefault();\n      let id = movies[i].id;\n      let movieName = await Object(_apiService_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchNetflixDescription\"])(id);\n      displayModale(movieName, _components_Modales_mjs__WEBPACK_IMPORTED_MODULE_2__[\"ModaleSeries\"]);\n    });\n  }\n})();\n\nconst displaySections = async (className, callback, genre = null) => {\n  let container = document.getElementById(className);\n  let res = await callback(genre);\n  let movies = res.results;\n  for (let i = 0; i < movies.length; i++) getMovie(container, movies[i]);\n};\n\n// FILMS TENDANCE ////////////////////////////////////////////////////////////////////////\n(async () => {\n  displaySections(\"movies-container-2\", _apiService_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchTrending\"]);\n  displaySections(\"movies-container-3\", _apiService_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchTopRated\"]);\n  displaySections(\"movies-container-4\", _apiService_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchByGenreMovies\"], 28);\n\n\n})();\n\n// FILMS LES MIEUX NOTES //////////////////////////////////////////////////////////////\n// FILMS PAR GENRE ////////////////////////////////////////////////////////////////////\n// Films par genre : ACTION //////////////////////////////////////////////////////////\n// Films par genre : COMEDY /////////////////////////////////////////////////////////////\n(async () => {\n  let netflixByGenreComedy = await Object(_apiService_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchByGenreMovies\"])(35);\n  let container = document.getElementById(\"movies-container-5\");\n  let movies = netflixByGenreComedy.results;\n\n  for (let i = 0; i < movies.length; i++) {\n    getMovie(container, movies[i]);\n  }\n})();\n\n// Films par genre : DOCUMENTARY ///////////////////////////////////////////////////////\n(async () => {\n  let netflixByGenreDocumentary = await Object(_apiService_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchByGenreMovies\"])(99);\n  let container = document.getElementById(\"movies-container-6\");\n  let movies = netflixByGenreDocumentary.results;\n\n  for (let i = 0; i < movies.length; i++) {\n    getMovie(container, movies[i]);\n  }\n})();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./input.js":
/*!******************!*\
  !*** ./input.js ***!
  \******************/
/*! exports provided: displayRechercheMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayRechercheMovie\", function() { return displayRechercheMovie; });\n/* harmony import */ var _apiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiService.js */ \"./apiService.js\");\n\n\nasync function displayRechercheMovie(){\n    const recherche = document.querySelector('.navigation__container--left__input');\n    recherche.addEventListener('input', async(event) => {\n        const searchString = event.target.value.toLowerCase();\n        let movieList = await Object(_apiService_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchListMovie\"])(searchString);\n        let movieResult = movieList.results;\n        let container = document.querySelector('.container')\n    \n        let divSearch = document.querySelector('.search-container');\n        divSearch.innerHTML=\"\";\n\n        if(searchString.length >= 1){\n            for (let i = 0; i < movieResult.length; i++) {\n                let movie = document.createElement('div');\n                movie.className = \"movies__container--movie-search\";\n                let image = document.createElement('img');\n                image.className = \"movies__container--movie-image\";\n                image.src = `https://image.tmdb.org/t/p/original/${movieResult[i].poster_path}`;\n                if(movieResult[i].poster_path === null){\n                    image.src = './img/Logo_Netflix_Poster.jpg';\n                };\n                divSearch.appendChild(movie);\n                movie.appendChild(image);\n                \n            }\n            container.style.display = 'none';\n        }else{\n            container.style.display = \"\";\n        }\n    });\n}\n     \n\n\n//# sourceURL=webpack:///./input.js?");

/***/ })

/******/ });