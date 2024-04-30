<script>
import { state } from '../state.js'
export default {
    name: 'AppMain',

    data() {
        return {
            state,
            languages: ['es', 'en', 'fr', 'it'],
            voteArray: []
        }
    },

    methods: {

        theFlag(lang) {
            if (this.languages.includes(lang)) {
                return true
            }
            return false
        },

        voteStar(number) {
            let voteString = '';
            const vote = Math.trunc(number);
            for (let i = 1; i <= vote; i++) {
                voteString += '<i class="fa-solid fa-star"></i>';
            }

            for (let i = vote; i <= 5; i++) {
                voteString += '<i class="fa-solid fa-star"></i>';
            }
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
            <li v-for="result in state.results">
                <!--img-film-->
                <div class="card text-bg-dark"> 
                    <img class="card-img"
                        :src="'http://image.tmdb.org/t/p/w185/' + result.poster_path" alt="">


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

                            <!--vote-film-->

                            <div>
                                {{ voteStar(result.vote_average) }}
                            </div>
                            <div v-for="star in voteStar(result.vote_average)">
                                <i class="fa-solid fa-star"></i>
                            </div>

                        </div>
                    </div>
                </div>



            </li>
            <!--serie-card-->
            <li class="card" v-for="result in state.resultsTv">
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

                        <!--vote-serie-->

                        <div v-if="Math.trunc(result.vote_average) > 5">
                            5
                        </div>
                        <div v-else>
                            {{ Math.trunc(result.vote_average) }}
                        </div>
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
    width: 185px;
    height: 278px;

}

img{
    width: 100%;
    height: 100%;
}


li {
    list-style: none;
}



.flag {
    width: 15px;
    height: 13px;
}
</style>
