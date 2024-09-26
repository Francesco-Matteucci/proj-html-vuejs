<script>
import MainPlans from './MainPlans.vue';
import MainArticles from './MainArticles.vue';
import MainBuyAvada from './MainBuyAvada.vue';


 export default {
    data() {
        return{

        }
    },
    components: {
        MainPlans,
        MainArticles,
        MainBuyAvada
    }  
}
</script>

<template>
      <MainPlans/>
      <MainArticles/>
      <MainBuyAvada />
</template>

<style scoped>
</style>
