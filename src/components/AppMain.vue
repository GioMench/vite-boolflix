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
            this.state.callApi(url)
        }
    }

}
</script>

<template >
    <div>
        <h1>Boolflix</h1>

        <input type="text" v-model="state.searchFilm" @keyup.enter="searchMovies()">
        <button @click="searchMovies()">CERCA</button>

        <ul>
            <li v-for="result in state.results">
                <div>{{ result.title }}</div>
                <div>{{ result.original_title }}</div>
                <div>{{ result.original_language }}</div>
                <div>{{ result.vote_average }}</div>
            </li>
        </ul>
    </div>

</template>

<style>

li{
    border: 1px solid black;
    margin: 3px;
    list-style: none;
    border-radius: 8px;
    color: white;
    background-color: rgb(27, 27, 27);
}

</style>
