<script>

export default {
    data() {
        return{

        }
    },
    props:{
        itemCard:{
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <article >  
        <a href="https://themeforest.net/item/avada-responsive-multipurpose-theme/2833226?irgwc=1&clickid=RTpRi5yN2xyKTIqQnV04UVzBUkCyM5U5S2udUA0&iradid=275988&irpid=1292887&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1292887&utm_medium=affiliate&utm_source=impact_radius" >
            <i class="fa-solid fa-image icon"></i>
            <h3>{{ itemCard.title}}</h3>
            <h5>{{ itemCard.subtitle}}</h5>
            <p>{{ itemCard.description}}</p>
            <div>
                <span>{{ itemCard.link}}</span>
                <i class="fa-solid fa-chevron-right "></i>
            </div>
        </a>
    </article>   
</template>

<style lang="scss" scoped>
    article{
        width: 100%;
        height: 550px;
        border: 5px solid #4154ff;
        border-radius: 5px;
        text-decoration: none;
        display: flex;

        a{
            color: white;
            text-decoration: none;
            text-align: center;
            padding: 10px;
            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
       
        .icon{
            font-size: 70px;
            margin-bottom: 30px;
        }

        h5{
            color: #fff941;
            margin-bottom: 30px;
        }

        p{
            margin-bottom: 30px;
        }   
    }
     
    article:hover{
        transition: all 0.3s linear;
        scale: 1.05;
    }


</style>