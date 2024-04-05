<script>
import { state } from '../state.js'
export default {
    name: 'AppMain',
    data() {
        return {
            state
        }
    },
    methods: {
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

        <ul>
            <li class="card" v-for="result in state.results">
                <div>
                    <img class="cover" :src="'http://image.tmdb.org/t/p/w185/' + result.poster_path" alt="">
                </div>
                <div>{{ result.title }}</div>
                <div>{{ result.original_title }}</div>

                <div>
                    <img class="flag" :src="'/public/1x1/' + result.original_language + '.svg'" alt="">
                </div>
                <div>{{ result.original_language }}</div>


                <div v-if="Math.trunc(result.vote_average) > 5">
                   5
                </div>
                <div v-else>
                   {{ Math.trunc(result.vote_average) }} 
                </div>
                
            </li>

            <li class="card" v-for="result in state.resultsTv">
                <div>
                    <img class="cover" :src="'http://image.tmdb.org/t/p/w185/' + result.poster_path" alt="">
                </div>
                <div>{{ result.title }}</div>
                <div>{{ result.original_title }}</div>

                <div>
                    <img class="flag" :src="'/public/1x1/' + result.original_language + '.svg'" alt="">
                </div>
                <div>{{ result.original_language }}</div>


                <div v-if="Math.trunc(result.vote_average) > 5">
                   5
                </div>
                <div v-else>
                   {{ Math.trunc(result.vote_average) }} 
                </div>
                
            </li>
        </ul>
    </div>

</template>

<style>
.card {
    border: 1px solid black;
    margin: 3px;
    list-style: none;
    border-radius: 8px;
    color: white;
    background-color: rgb(27, 27, 27);
    width: 250px;
    padding: 8px;
    height: 420px;
}


.flag {
    width: 20px;
    height: 13px;
}
</style>
