<script>
    export default {
        data() {
            return {
                images: [
                    {
                        src: 'service6-2x.jpg',
                        title: 'Crossfit workout',
                        text: 'Flash your limits'
                    },
                    {
                        src: 'box1-2x.jpg',
                        title: 'New gym apparel',
                        text: 'Be the best you'
                    },
                    {
                        src: 'box3-2x.jpg',
                        title: 'Team training',
                        text: 'Reach your goals'
                    }
                ]
            };
        },
        methods: {
            getImagePath(imgPath) {
                return new URL(`../../assets/img/${imgPath}`, import.meta.url).href;
            }
        }
    };
</script>

<template>
    <div class="testimonial-section">
        <div class="container" data-aos="fade-up">
            <div class="row">
                <div v-for="(image, index) in images" :key="index" class="col-md-4 g-4">
                    <div class="image-container">
                        <img class="img-fluid" :src="getImagePath(image.src)" :alt="image.title">
                        <div class="overlay">
                            <small>
                                <div class="text-white">
                                    <i class="fa-solid fa-chevron-up icon-right"></i><i
                                        class="fa-solid fa-chevron-up"></i><i
                                        class="fa-solid fa-chevron-up icon-left"></i>
                                </div>
                            </small>
                            <h3>{{ image.title }}</h3>
                            <p>{{ image.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="quote d-flex flex-column justify-content-center align-items-center">
                <h2 class="col-9 mb-5">“How you respond to the challenge in the second half will determine what you
                    become
                    after the game,
                    whether you are a winner or a loser.”</h2>
                <div class="text-warning">
                    <i class="fa-solid fa-chevron-up icon-right"></i><i class="fa-solid fa-chevron-up"></i><i
                        class="fa-solid fa-chevron-up icon-left"></i>
                </div>
                <div class="author-wrapper">
                    <img src="../../assets/img/avatar-1-2x.jpg" alt="author">
                    <span class="ms-3">Brad Johnson </span> <span class="author-city ms-3">Las Vegas</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .row {
        position: relative;
        top: -100px;
        left: 0;
    }

    .testimonial-section {
        background: linear-gradient(150deg, #0815D3 0%, #4C0E92 50%, #B8042D 100%);
        padding: 3rem 0;
        color: white;
        cursor: pointer;

        .image-container {
            position: relative;
            overflow: hidden;

            &:hover {
                scale: 1.05;
                transition-property: transform;
                transition-duration: 0.3s;
                transition-timing-function: ease-in-out;

            }

            img {
                width: 100%;
                height: auto;
                display: block;
                border-radius: 5px 5px 30px 5px;
                filter: brightness(0.8);
            }

            .overlay {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                color: white;
                padding: 1rem;
                text-shadow: 1px 1px 10px black;

                h3 {
                    font-size: 1.4rem;
                    margin-bottom: 0.5rem;
                }

                p {
                    color: #FFF941;
                    font-size: 1.4rem;
                }
            }

        }

        .quote {
            text-align: center;

            h2 {
                font-size: 2.5rem;
            }

            img {
                width: 60px;
                border-radius: 50%;
            }

            .author-city {
                color: #98939F;
            }
        }
    }
</style>