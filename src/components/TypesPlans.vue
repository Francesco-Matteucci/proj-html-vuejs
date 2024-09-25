<script>


 export default {
    data() {
        return{  
            info:[
                {
                    icon: "clock",
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
                    icon: "clock",
                    title: "Weigth loss plan",
                    subtitle: "Shed those pounds",
                    description: "At laoreet senectus volutpat diam vel sed amet pellentesque. Lobortis ut aliquam risus purus. A tellus ut etiam.",
                    link:"Schedule a workout "
                },
]
        }
    }
 }
</script>

<template>
    <section v-for="(item, i) in info" :key="i">   
        <a href="https://themeforest.net/item/avada-responsive-multipurpose-theme/2833226?irgwc=1&clickid=RTpRi5yN2xyKTIqQnV04UVzBUkCyM5U5S2udUA0&iradid=275988&irpid=1292887&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1292887&utm_medium=affiliate&utm_source=impact_radius" id="card" class="container">
            <i id="icon" class="fa-regula fa-clock"></i>
            <h3>{{ info[i].title}}</h3>
            <h5>{{ info[i].subtitle}}</h5>
            <p>{{ info[i].description}}</p>
            <div>
                <span>{{ info[i].link}}</span>
                <i class="fa-solid fa-chevron-right "></i>
            </div>
        </a> 
       
    </section> 

</template>

<style lang="scss" scoped>
section {
    background-color: black;
    color: white;
    padding: 30px;
    

    #card{
        width: 30%;
        height: 600px;
        border: 5px solid #4154ff;
        text-decoration: none;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
       
        #icon{
            font-size: xx-large;
            margin-bottom: 30px;
        }

        h5{
            color: #fff941;
            margin-bottom: 30px;
        }

        p{
            text-align: center;
            margin-bottom: 30px;
        }

    }
}
</style>
