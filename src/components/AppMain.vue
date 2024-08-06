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
        <button @click="searchMovies()">SEARCH</button>

        <div class="container">

            
            
            <div class="row" v-for="result in state.results">
                <div>
                    <!--film-card-->
                    <div class="card">

                        <!--img-film-card-->
                        <img class="card-img img-fluid rounded-start"
                            :src="'http://image.tmdb.org/t/p/w185/' + result.poster_path" alt="...">

                        <!--info-film-->
                        <div class="card-body">
                            <h3 class="card-title">{{ result.title }}</h3>
                            <p class="card-text small-text">RIPRODUZIONI: {{ result.popularity }}
                            </p>
                            <p class="card-text">STORYLINE: <br>{{ result.overview }}
                            </p>

                            <p class="card-text" v-if="theFlag(result.original_language)">
                                <img class="flag" :src="'/public/flag/' + result.original_language + '.png'" alt="">
                            </p>

                            <p class="card-text" v-else>{{ result.original_language }}</p>
                        </div>
                    </div>
                </div>

            </div>
            <br>
            
            <br>
            <div class="row" v-for="result in state.resultsTv">
                <div class="col-4">
                    <!--serie-card-->
                    <div class="card mb-3">

                        <div class="row gx-3">
                            <!--img-film-card-->
                            <div class="col-4">
                                <img class="card-img img-fluid rounded-start"
                                    :src="'http://image.tmdb.org/t/p/w185/' + result.poster_path" alt="...">
                            </div>
                            <!--info-film-->
                            <div class="col-8">
                                <div class="card-body">
                                    <h4 class="card-title">{{ result.name }}</h4>
                                    <p class="card-text"><small class="text-body-secondary">{{ result.original_name }}
                                        </small>
                                    </p>
                                    <p class="card-text" v-if="theFlag(result.original_language)">
                                        <img class="flag" :src="'/public/flag/' + result.original_language + '.png'"
                                            alt="">
                                    </p>
                                    <p class="card-text" v-else>{{ result.original_language }}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    </div>

</template>

<style>
.card {
    display: flex;
    width: 400px;
    height: 250px;
    margin: 15px;
    background-color: rgba(4, 4, 4, 0.34);
    border-radius: 20px;
}

.card-body {
    padding: 15px;
    color: whitesmoke;
    overflow-y: scroll;

}

.card-body::-webkit-scrollbar {
    display: none;
}

img {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.small-text {
    font-size: x-small;
}

p {
    font-size: smaller;
    font-weight: 100;
}

.flag {
    width: 15px;
    height: 13px;
    border-radius: 50%;
}
</style>
