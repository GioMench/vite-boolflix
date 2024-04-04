<script >
import AppMain from './components/AppMain.vue'
import {state} from './state.js'
export default{
  name:'App',
  components:{
    AppMain,
  },
  data(){
    return{
      state
    }
  }
}
</script>

<template>
<AppMain />
</template>

<style >

</style>
