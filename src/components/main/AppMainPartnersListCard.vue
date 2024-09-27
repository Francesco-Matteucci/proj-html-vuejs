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
        <div class="card sponsor-card text-center border-0">
            <a href="https://avada.website/fitness/playlist/">
                <img :src="sponsorLogo" class="img-fluid" alt="logo">
                <div class="text-primary">
                    <i class="fa-solid fa-chevron-up icon-right"></i><i class="fa-solid fa-chevron-up"></i><i
                        class="fa-solid fa-chevron-up icon-left"></i>
                </div>
                <div class="card-body">
                    <p class="card-text">{{ sponsorTxt }}</p>
                    <h6 class="fw-bold">{{ sponsorCall }}</h6>
                </div>
            </a>
        </div>
    </div>
</template>

<style scoped lang="scss">
    img {
        width: 150px;
    }

    .sponsor-card {

        text-align: center;
        padding: 100px 0;
        cursor: pointer;
    }

    .card-text {
        min-height: 150px;
        font-size: 16px;
        color: #6c757d;
    }

    h6 {
        font-size: 16px;
        font-weight: bold;
        color: #000;
    }

    a {
        text-decoration: none;
        color: #000;
    }

    @media (max-width: 768px) {
        img {
            width: 120px;

        }

        .card-text {
            height: auto;
            font-size: 14px;
        }

        h6 {
            font-size: 14px;
        }
    }
</style>
