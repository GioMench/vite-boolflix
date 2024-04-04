<script>
import { state } from '../state.js'
export default {
    name: 'AppMain',
    data() {
        return {
            state
        }
    },
    mounted() {
        state.callApi()
    }
}
</script>

<template>
    <h1>Boolflix</h1>

    <ul>
        <li v-for="result in state.results">
            {{ result.original_title }}
        </li>
    </ul>

</template>

<style></style>
