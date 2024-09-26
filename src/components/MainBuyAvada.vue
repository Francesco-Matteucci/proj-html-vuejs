<script>
 export default {
    data() {
        return{

        }
    }  
}

</script>

<template>
    <section>
        <div>
            <h1>"I've failed over and over again in my life. And that is why I succeed."</h1>
            <p>simbol</p>
            <p class="description">Arcu auctor  gravida nisl, congue sit nisi tincidunt eget proin. In lacinia lacus donec sed massa in ipsum eros, tristique. Gravida supendisse etiam in iaculis</p>
            <button>Buy avada today <i class="fa-solid fa-chevron-right"></i></button>
        </div>
    </section>
</template>

<style lang="scss" scoped>

    section{
        height: 70vh;
        color: white;
        background: linear-gradient( transparent, black ), url('../assets/img/banner2-2x.jpg');
        background-size: cover;
        background-position: center;
        position: relative;  
        margin-bottom: 100px;
        
    }
    
    section div {
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;
        transform: translate(-50%, -50%); 
        
        width: 576px;
    }

    h1{
        font-size: 2.2rem;
        margin-bottom: 1.5rem;
    }

    p{
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
    }

    .description{
        color: rgba(255, 255, 255, 0.589);
    }


    //Responsive

    @media screen and (min-width:1020px) {
        section{
            height: 100vh;
        }

        section div{
            width: 600px;
        }

        h1{
            font-size: 3.2rem;
            margin-bottom: 2rem;
            
        }

        p{
            font-size: 1.5rem;
            margin-bottom: 2rem;
              
        }

    }
</style>
