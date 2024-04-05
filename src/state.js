import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({
    results: [],
    base_movies_api_url: 'https://api.themoviedb.org/3/search/movie',
    key_api: '020af5f4a170366144c3befd4f42b017',
    searchFilm: '',
    base_series_api_url: 'https://api.themoviedb.org/3/search/tv',
    

    callApi(url) {
        axios.get(url).then(resp => {
            console.log(resp);
            this.results = resp.data.results
        })
    }
})