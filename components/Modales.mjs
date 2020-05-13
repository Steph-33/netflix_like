export function ModaleSeries(props) {
    return `
    <div id="modale">
        <div role="document" class="c-dialog__box">
            <h1 class="modaleTitle">${props.original_name || props.original_title}</h1>
            <div id="modaleContainer">
                <h2 class="modaleVote">Rated : ${props.vote_average*10}%</h2>
                <h2 class="modaleDate">Release Date : ${props.release_date || props.first_air_date}</h2>
                <h2 class="modaleEpisode">Nombre d'épisodes : ${props.number_of_episodes}   Nombre de saisons : ${props.number_of_seasons }</h2>
            </div>
            <p class="modaleDescription">${props.overview}</p>
            <button type="button" class="modaleButton">Close</button>
        </div>    
    </div>`;
}

export function ModaleMovies(props) {
    return `
    <div id="modale">
        <div role="document" class="c-dialog__box">
            <h1 class="modaleTitle">${props.original_name || props.original_title}</h1>
            <div id="modaleContainer">
                <h2 class="modaleVote">Rated : ${props.vote_average*10}%</h2>
                <h2 class="modaleDate">Release Date : ${props.release_date || props.first_air_date}</h2>
            </div>
            <p class="modaleDescription">${props.overview}</p>
            <button type="button" class="modaleButton">Close</button>
        </div>    
    </div>`;
}