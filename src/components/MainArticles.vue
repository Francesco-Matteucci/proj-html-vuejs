<script>
import ItemArticles from './ItemArticles.vue';

 export default {
    data() {
        return{
            list:[
                {
                   title: 'The best protein shake',
                   description: 'Published On: November 26th, 2019 | 2 Coments',
                   image: ''
                },
                {
                   title: 'Ultimate cardio workout',
                   description: 'Published On: November 26th, 2019 | 0 Coments',
                   image: ''
                },
                {
                   title: 'New juices available now',
                   description: 'Published On: November 26th, 2019 | 0 Coments',
                   image: ''
                },
            ]
        }
    },
    components:{
        ItemArticles
    }  
}

</script>

<template>

    <section>
        <div>
            <ItemArticles/>
        </div>
    </section>
</template>

<style scoped>
</style>
