<script>
    export default {
        data() {
            return {
                isVisible: false
            };
        },
        methods: {
            scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            },
            handleScroll() {
                this.isVisible = window.scrollY > 300;
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    };
</script>

<template>
    <div v-if="isVisible" class="scroll-to-top" @click="scrollToTop">
        <i class="fas fa-arrow-up"></i>
    </div>
</template>

<style scoped lang="scss">
    .scroll-to-top {
        position: fixed;
        right: 20px;
        bottom: 20px;
        width: 50px;
        height: 50px;
        background-color: #333;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition: opacity 0.3s ease;

        &:hover {
            background-color: #000;
        }

        i {
            font-size: 1.5rem;
        }

        opacity: 1;
        visibility: visible;
    }

    .scroll-to-top-hidden {
        opacity: 0;
        visibility: hidden;
    }
</style>
