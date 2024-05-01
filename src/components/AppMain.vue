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

        <div class="container">
            <!--film-card-->
            <div class="row" v-for="result in state.results">

                <div class="card">
                    <!--img-film-->
                    <img class="card-img" :src="'http://image.tmdb.org/t/p/w185/' + result.poster_path" alt="">


                    <div class="card-img-overlay">
                        <!--title-film-->
                        <h2 class="card-title">{{ result.title }}</h2>
                        <div class="card-text">
                            <p>{{ result.original_title }}</p>
                            <!--language_film-->
                            <p v-if="theFlag(result.original_language)">
                                <img class="flag" :src="'/public/flag/' + result.original_language + '.png'" alt="">
                            </p>
                            <p v-else>{{ result.original_language }}</p>

                        </div>
                    </div>
                </div>

            </div>
            <!--serie-card-->
            <div class="card" v-for="result in state.resultsTv">
                <!--img-serie-->

                <img class="card-img" :src="'http://image.tmdb.org/t/p/w185/' + result.poster_path" alt="">

                <div class="card-img-overlay">
                    <!--title-serie-->
                    <h2 class="card-title">{{ result.name }}</h2>
                    <div class="card-text">
                        <p>{{ result.original_name }}</p>
                        <!--language-serie-->
                        <p v-if="theFlag(result.original_language)">
                            <img class="flag" :src="'/public/flag/' + result.original_language + '.png'" alt="">
                        </p>
                        <p v-else>{{ result.original_language }}</p>

                    </div>

                </div>

            </div>
        </div>

    </div>

</template>

<style>
.card {
    border: 1px solid black;
    margin: 10px;
    color: white;
    width: 265px;
    height: 380px;
    position: relative;
}

.card-img-overlay {
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.264);
    width: 100%;
    text-align: left;
    height: 60%;
}

img {
    width: 100%;
    height: 100%;

}

.flag {
    width: 15px;
    height: 13px;
}

h2,
p {
    margin-left: 10px;
}
</style>
