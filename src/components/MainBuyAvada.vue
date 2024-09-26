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
        <div class="new-container">
            <h1 class="mb-5">"I've failed over and over again in my life. And that is why I succeed."</h1>
            <span></span>
            <p class="mb-5">Arcu auctor  gravida nisl, congue sit nisi tincidunt eget proin. In lacinia lacus donec sed massa in ipsum eros, tristique. Gravida supendisse etiam in iaculis</p>
            <button>Buy avada today <i class="fa-solid fa-chevron-right"></i></button>
        </div>
    </section>
</template>

<style lang="scss" scoped>

    section{
        height: 100vh;
        color: white;
        background-image: url('../assets/img/banner2-2x.jpg');
        background-size: cover;
        background-position: center;
        position: relative;  
        
        h1{
            font-size: 3rem;
        }

         p{
             font-size: 1.4rem;
         }
    }

    section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background-image: linear-gradient(#ffffff00, #060607e0);
    }

    //Filtro che non sta funzionando!!!!
    section div {
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;
        transform: translate(-50%, -50%);    
    }

    .new-container{
        width: 768px;
        margin: 0 auto;
    }

</style>
