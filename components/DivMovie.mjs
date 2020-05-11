export default function DivMovie(movies){
    return `
    <div class="movies _container--movie--netflix">
        <img src="https://image.tmdb.org/t/p/original/${movies.backdrop_path}"
        class="movies__container--movie-image">
    </div> 
    `;
}