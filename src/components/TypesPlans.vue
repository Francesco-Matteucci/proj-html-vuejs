<script>


 export default {
    data() {
        return{  
            info:[
                {
                    icon: "clock",
                    title: "Team training",
                    subtitle: "Find a partner",
                    discription: "Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. tristique",
                    link:"Find a partner"
                },
]
        }
    }
 }
</script>

<template>
    <section v-for="item in info">   
        <a href="https://themeforest.net/item/avada-responsive-multipurpose-theme/2833226?irgwc=1&clickid=RTpRi5yN2xyKTIqQnV04UVzBUkCyM5U5S2udUA0&iradid=275988&irpid=1292887&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1292887&utm_medium=affiliate&utm_source=impact_radius" id="card" class="container">
            <i id="icon" class="fa-solid fa-{{info.icon}}"></i>
            <h3>{{ info.title}}</h3>
            <h5>{{ info.subtitle}}Subtitle</h5>
            <p>{{ info.description}}Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore dolorum optio sed consequatur sint excepturi quo eum minus, est, praesentium, nesciunt consequuntur iusto inventore assumenda corporis veritatis fuga amet.</p>
            <div>
                <span>{{ info.description}}link sito </span>
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
