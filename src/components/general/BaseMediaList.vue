<script>


export default {
    data() {
        return {

        }
    },
    components: {

    },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    methods: {
        getImagePath(imagePath) {
            return new URL(`../../assets/img/${imagePath}`, import.meta.url).href;
        }
    }
}

</script>

<template>
    <section>
        <div class="container-fluid">
            <div class="section-top d-flex align-items-center justify-content-between mb-5">
                <h3>{{ data.textTop.titleSection }}</h3>
                <div class="view-all d-flex align-items-center gap-2">
                    <h5>{{ data.textTop.textRight }}</h5>
                    <i class="fas fa-chevron-right fa-xs"></i>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-5">
                <div class="col" v-for="(m, index) in data.media" :key="index">
                    <div class="media">
                        <div class="media-image">
                            <img class="mb-3" :src="getImagePath(m.src)" :alt="m.titleMedia">
                        </div>
                        <div :class="this.data.styleText ? this.data.styleText : ''" class="media-body">
                            <h4 class="mb-1">{{ m.titleMedia }}</h4>
                            <p :class="this.data.styleParagraph ? this.data.styleParagraph : ''" class="mb-0">{{
                                m.subtitleMedia }}</p>
                            <span class="comments" v-if="m.comments"> {{ m.comments }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding: 4rem;

    h3 {
        font-size: 27px;
    }

    img {
        max-width: 100%;
        height: auto;
        border-bottom-right-radius: 30px;
    }

    .media-body {

        p,
        .comments {
            font-size: 20px;
        }

        p.text-different {
            color: rgb(65, 84, 255);
            font-weight: 500;
        }

    }
}
</style>