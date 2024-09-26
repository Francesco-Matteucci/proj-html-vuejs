<script>
export default {
    data() {
        return {

        }
    },
    props: {
        sponsorLogo: {
            type: String,
            required: true,

        },
        sponsorTxt: {
            type: String,
            required: true,

        },
        sponsorCall: {
            type: String,
            required: true,

        },

    }
}
</script>

<template>
    <div id="app">


        <div class=" card sponsor-card text-center border-0">
            <a href="#"></a>
            <img :src="sponsorLogo" class="img-fluid" alt="logo">
            <div class="card-body">
                <p class="card-text">{{ sponsorTxt }}</p>
                <h6 class="fw-bold">{{ sponsorCall }}</h6>
            </div>




        </div>









    </div>
</template>

<style lang="css" scoped>
img {
    width: 100px;

}

;

.sponsor-card {

    text-align: center;
    padding: 20px;
    cursor: pointer;
}

.sponsor-card:hover {
    transform: scale(1.05);
}

.card-text {
    height: 250px;
    font-size: 18px;
}
</style>