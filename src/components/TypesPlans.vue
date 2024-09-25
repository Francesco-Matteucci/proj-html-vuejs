<script>


 export default {
    data() {
        return{  
        }
    }
 }
</script>

<template>
    <section >   
        <div id="card" class="container">
            <i id="icon" class="fa-solid fa-check"></i>
            <h3>Title</h3>
            <h5>Subtitle</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore dolorum optio sed consequatur sint excepturi quo eum minus, est, praesentium, nesciunt consequuntur iusto inventore assumenda corporis veritatis fuga amet.</p>
            <div>
                <a href="#">link sito </a>
                <i class="fa-solid fa-chevron-right "></i>
            </div>
        </div> 
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
        
        div a{
            text-decoration: none;
            color: white;
        }

    }
}
</style>
