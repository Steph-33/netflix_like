const APÎ_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "3a0449720017ece47d0711bc3f199995";

//1
// export function fetchMovie(movieId, cb) {
//   const url = `${APÎ_URL}${movieId}?api_key=${API_KEY}`;

//     var xhr_object = new XMLHttpRequest();
//     xhr_object.open("GET", url, false);
//     xhr_object.send(null);

//     if (xhr_object.readyState == 4) {
//       return cb(JSON.parse(xhr_object.responseText));
//     }
  
// }

//2
// export default function fetchMovie(movieId) {
//   const url = `${APÎ_URL}${movieId}?api_key=${API_KEY}`;

//   return new Promise((resolve, reject) => {
//     var xhr_object = new XMLHttpRequest();
//     xhr_object.open("GET", url, false);
//     xhr_object.send(null);

//     if (xhr_object.readyState == 4) {
//       resolve(JSON.parse(xhr_object.responseText));
//     }
//   });
// }

// export default function fetchMovie(movieId) {
//   const url = `${APÎ_URL}${movieId}?api_key=${API_KEY}`;
//   return fetch(url).then(res => {
//     return res.json()
//   }).then(movie => {
//       return movie;
//   })
// }

//3
export default async function fetchMovie(movieId) {
  const url = `${APÎ_URL}${movieId}?api_key=${API_KEY}`;
  let res = await fetch(url);
  let movie = await res.json();
  console.log(movie);
  return movie;
}

export async function fetchNetflixOriginals() {
  console.log('hello')
  const url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;
  let res = await fetch(url);
  let netflixOriginals = await res.json();
  console.log(netflixOriginals)
  return netflixOriginals;
}

export function fetchTrending() {}

export function fetchTopRated() {}

export function fetchByGenreMovies(genre) {}
