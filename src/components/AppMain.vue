<script>
import MainTypesPlans from './MainTypesPlans.vue';
import MainArticles from './MainArticles.vue';
import MainBuyAvada from './MainBuyAvada.vue';


 export default {
    data() {
        return{

        }
    },
    components: {
        MainTypesPlans,
        MainArticles,
        MainBuyAvada
    }  
}
</script>

<template>
      <MainTypesPlans/>
      <MainArticles/>
      <MainBuyAvada />
</template>

<style scoped>
</style>
