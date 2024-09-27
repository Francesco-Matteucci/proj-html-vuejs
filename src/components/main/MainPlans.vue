<script>
import ItemPlans from './ItemPlans.vue';

export default {
    data() {
        return {
            info: [
                {
                    src: "plans-watch.png",
                    title: "Team training",
                    subtitle: "Find a partner",
                    description: "Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. tristique",
                    link: "Find a partner "
                },
                {
                    src: "plans-weight.png",
                    title: "Crossfit workout",
                    subtitle: "Push your limits",
                    description: "Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. tristique",
                    link: "Learn about crossfit "
                },
                {
                    icon: "plans-body.png",
                    title: "Weigth loss plan",
                    subtitle: "Shed those pounds",
                    description: "At laoreet senectus volutpat diam vel sed amet pellentesque. Lobortis ut aliquam risus purus. A tellus ut etiam.",
                    link: "Schedule a workout "
                },
            ]
        }
    },
    components: {
        ItemPlans
    }
}

</script>

<template>
    <section>
        <div class="container">
            <div class="row gap-5 justify-content-center ">
                <div v-for="(item, i) in info" :key="i" :itemCard="item" class="col-10 col-md-3 mb-5">
                    <ItemPlans :itemCard="item" />
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
section {
    background-color: black;
    color: white;
    /* padding: 50px; */
}
</style>
