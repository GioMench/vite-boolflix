import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({
    results: [],
    base_movies_api_url: 'https://api.themoviedb.org/3/search/movie?api_key=fbdbb4bc9501aa5963bc9186e57dcf80&query=harry',
    key_api: 'fbdbb4bc9501aa5963bc9186e57dcf80',
    searchFilm: '',
    

    callApi() {
        axios.get(this.base_movies_api_url).then(resp => {
            console.log(resp);
            this.results = resp.data.results
        })
    }
})