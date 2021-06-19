const TMDB_ENDPOINT = 'https://api.themoviedb.org/3';
const API_KEY = 'd90cb9900e2d9edce571f467b6f7af9a';
const IMG_PREFIX = 'https://image.tmdb.org/t/p/w500';
const LANGUAGE = '&language=pt-BR';


function carregaFilmes() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', TMDB_ENDPOINT + '/movie/popular?api_key=' + API_KEY + LANGUAGE);
    xhr.onload = exibeFilmes;
    xhr.send();

}

function pesquisaFilmes () {
    let xhr = new XMLHttpRequest ();

    let query = document.getElementById ('inputPesquisa').value;

    xhr.open('GET', TMDB_ENDPOINT + '/search/movie?api_key=' + API_KEY + '&query=' + query);
    xhr.onload = exibeFilmes;
    xhr.send();

}

function exibeFilmes(evt) {
    let textoHTML = '';

    let filmes = JSON.parse(evt.target.responseText);

    for (let i = 0; i < filmes.results.length; i++) {
        let titulo = filmes.results[i].title;
        let sinopse = filmes.results[i].overview;
        let imagem = IMG_PREFIX + filmes.results[i].poster_path;
        let data = filmes.results[i].release_date;
        let original = filmes.results[i].original_title;

        textoHTML += `<div class="col-sm-12 col-lg-3 col-md-6">
        <div class="image-flip">
            <div class="mainflip flip-0">
                <div class="frontside">
                    <div class="card shadow p-3 bg-body rounded-6" style="height: 40rem; border: none;
                    border-radius: 30px;">
                        <div class="card-body">
                            <p><img class="img-fluid" src="${imagem}" alt="${titulo}" style="border: none;
                            border-radius: 30px;"></p>
                            <h4 class="card-title">${titulo}</h4>
                            <h6 class="card-text">Lançamento: ${data}</h6>
                            <h6 class="card-text">Título Original: ${original}</h6>
                        </div>
                    </div>
                </div>
                <div class="backside">
                    <div class="card shadow p-3 bg-body rounded-6" style="height: 40rem; border: none;
                    border-radius: 30px;">
                        <div class="card-body text-center">
                            <h4 class="card-title">${titulo}</h4>
                            <p class="card-text">${sinopse}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }

    document.getElementById('tela').innerHTML = textoHTML;


}


