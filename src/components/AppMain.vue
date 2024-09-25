<script>
import TypesPlans from './TypesPlans.vue';
import Articles from './Articles.vue';
import BuyAvada from './BuyAvada.vue';


 export default {
    data() {
        return{

        }
    },
    components: {
        TypesPlans,
        Articles,
        BuyAvada
    }  
}

</script>

<template>
      <h1>Main</h1>

      <TypesPlans/>
      <Articles/>
      <BuyAvada />
</template>

<style scoped>
</style>
