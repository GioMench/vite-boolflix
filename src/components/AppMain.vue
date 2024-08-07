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



            <div v-for="result in state.results">

                <div class="card">
                    <!--img-film-card-->
                    <img class="card-img img-fluid rounded-start"
                        :src="'http://image.tmdb.org/t/p/w185/' + result.poster_path" alt="...">
                    <!--info-film-card-->
                    <div class="card-body">
                        <div class="card-text">
                            <h3>{{ result.title }}</h3>
                            <p class="small-text"><em>year: </em> <strong> {{ result.release_date }}</strong>
                            </p>
                            <p class="small-text"><em>streaming: </em> <strong> {{ result.popularity }}</strong>
                            </p>

                            <p><em>STORYLINE:</em> <br>{{ result.overview }}
                            </p>

                            <p v-if="theFlag(result.original_language)">
                            <div class="small-text">LANG:</div>
                            <img class="flag" :src="'/public/flag/' + result.original_language + '.png'" alt="">
                            </p>

                            <p v-else>
                            <div class="small-text">LANG:</div> {{ result.original_language }}</p>
                        </div>
                    </div>
                </div>

            </div>



            <div class="row" v-for="result in state.resultsTv">

                <!--serie-card-->
                <div class="card">

                    <!--img-serie-card-->
                    <img class="card-img img-fluid rounded-start"
                        :src="'http://image.tmdb.org/t/p/w185/' + result.poster_path" alt="...">

                    <!--info-serie-->
                    <div class="card-body">
                        <div class="card-text">
                            <h3>{{ result.name }}</h3>
                            <h3>{{ result.title }}</h3>
                            <p class="small-text"><em>year: </em> <strong> {{ result.first_air_date }}</strong>
                            </p>
                            <p class="small-text"><em>streaming: </em> <strong> {{ result.popularity }}</strong>
                            </p>

                            <p><em>STORYLINE:</em> <br>{{ result.overview }}
                            </p>


                            <p v-if="theFlag(result.original_language)"><div class="small-text">LANG:</div>
                                <img class="flag" :src="'/public/flag/' + result.original_language + '.png'" alt="">
                            </p>
                            <p v-else><div class="small-text">LANG:</div>{{ result.original_language }}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>





   

</template>

<style>
.card {
    position: relative;
    width: 185px;
    height: 265px;
    margin: 15px;


}


img {
    width: 185px;
    height: 265px;
    border-radius: 20px;

}

.card:hover {
    .card-body {
        display: block;
    }
}

.card-body {
    width: 185px;
    height: 265px;
    border-radius: 20px;
    color: whitesmoke;
    overflow-y: scroll;
    position: absolute;
    bottom: 0;
    display: none;
    background-color: rgba(0, 0, 0, 0.815);
}


.card-body::-webkit-scrollbar {
    display: none;
}



.card-text {
    padding: 10px;
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
