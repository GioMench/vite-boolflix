<script>
import { state } from '../state.js'
export default {
    name: 'AppMain',

    data() {
        return {
            state,
            languages: ['es', 'en', 'fr', 'it'],
        }
    },

    methods: {

        theFlag(lang) {
            if (this.languages.includes(lang)) {
                return true
            }
            return false
        },

        searchMovies() {
            const url = `${state.base_movies_api_url}?api_key=${state.key_api}&query=${state.searchFilm}`;
            //console.log(url);
            const urlSerie = `${state.base_series_api_url}?api_key=${state.key_api}&query=${state.searchFilm}`;
            this.state.callApi(url, urlSerie);
        },

    }

}
</script>

<template>
    <div>
        <h1>Boolflix</h1>

        <input type="text" v-model="state.searchFilm" @keyup.enter="searchMovies()">
        <button @click="searchMovies()">CERCA</button>

        <ul class="container">
            <!--film-card-->
            <li class="card" v-for="result in state.results">
                <!--img-film-->
                <div>
                    <img class="cover" :src="'http://image.tmdb.org/t/p/w185/' + result.poster_path" alt="">
                </div>
                <div class="container_info">
                    <!--title-film-->
                    <h2>{{ result.title }}</h2>
                    <p>{{ result.original_title }}</p>
                    <!--language_film-->
                    <p v-if="theFlag(result.original_language)">
                        <img class="flag" :src="'/public/flag/' + result.original_language + '.png'" alt="">
                    </p>
                    <p v-else>{{ result.original_language }}</p>

                    <!--vote-film-->
                    <div v-if="Math.trunc(result.vote_average) >= 5">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>

                    <div v-else> 0</div>
                </div>

            </li>
            <!--serie-card-->
            <li class="card" v-for="result in state.resultsTv">
                <!--img-serie-->
                <div>
                    <img class="cover" :src="'http://image.tmdb.org/t/p/w185/' + result.poster_path" alt="">
                </div>
                <div class="container_info">
                    <!--title-serie-->
                    <h2>{{ result.name }}</h2>
                    <p>{{ result.original_name
                        }}</p>
                    <!--language-serie-->
                    <p v-if="theFlag(result.original_language)">
                        <img class="flag" :src="'/public/flag/' + result.original_language + '.png'" alt="">
                    </p>
                    <p v-else>{{ result.original_language }}</p>

                    <!--vote-serie-->
                    <div v-if="Math.trunc(result.vote_average) > 5">
                        5
                    </div>
                    <div v-else>
                        {{ Math.trunc(result.vote_average) }}
                    </div>
                </div>

            </li>
        </ul>

    </div>

</template>

<style>
.card {
    border: 1px solid black;
    margin: 10px;
    list-style: none;
    color: white;
    background-color: rgb(27, 27, 27);
    width: 250px;
    max-height: 370px;
    box-sizing: content-box;
    position: relative;
    
}


.cover {
    width: 100%;
    height: 370px;

}



h2{
    line-height: 20px;
}


.flag {
    width: 15px;
    height: 13px;
}
</style>
