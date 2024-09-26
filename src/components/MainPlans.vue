<script>
import ItemPlans from './ItemPlans.vue';

 export default {
    data() {
        return{
            info:[
                {
                    icon: "",
                    title: "Team training",
                    subtitle: "Find a partner",
                    description: "Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. tristique",
                    link:"Find a partner "
                },
                {
                    icon: "",
                    title: "Crossfit workout",
                    subtitle: "Push your limits",
                    description: "Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. tristique",
                    link:"Learn about crossfit "
                },
                {
                    icon: "",
                    title: "Weigth loss plan",
                    subtitle: "Shed those pounds",
                    description: "At laoreet senectus volutpat diam vel sed amet pellentesque. Lobortis ut aliquam risus purus. A tellus ut etiam.",
                    link:"Schedule a workout "
                },
            ]
        }
    },
    components:{
            ItemPlans
        }
}

</script>

<template>
    <section class="row ">
        <div class="d-flex gap-5 justify-content-center flex-wrap">
            <div v-for="(item, i) in info" :key="i" :itemCard="item" class="col-10 col-md-3 mb-5">
                <ItemPlans :itemCard="item" />
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
section {
    background-color: black;
    color: white;
    padding: 50px;
}
</style>
