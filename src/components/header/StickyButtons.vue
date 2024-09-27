<script>
    export default {
        data() {
            return {
                buttons: [
                    {
                        icon: 'fas fa-cube',
                        text: 'Prebuilts',
                        link: '#',
                    },
                    {
                        icon: 'fas fa-shopping-cart',
                        text: 'Buy Now',
                        link: '#',
                    }
                ]
            };
        }
    };
</script>

<template>
    <div class="sticky-buttons">
        <div v-for="(button, index) in buttons" :key="index" class="sticky-button p-2 p-md-3"
            @click="goToLink(button.link)">
            <i :class="button.icon"></i>
            <span class="d-none d-md-block button-text">{{ button.text }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .sticky-buttons {
        position: fixed;
        right: 20px;
        bottom: 400px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        z-index: 1;
    }

    .sticky-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: white;
        color: #333;
        border-radius: 10px;
        width: 40px;
        height: 40px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.3s ease;

        @media (min-width: 768px) {
            width: 70px;
            height: 70px;
        }
    }

    .sticky-button i {
        font-size: 1.1rem;

        @media (min-width: 768px) {
            font-size: 1.5rem;
        }
    }

    .sticky-button:hover {
        background-color: #f5f5f5;
        transform: scale(1.05);
    }

    .sticky-button:active {
        transform: scale(0.95);
    }

    .sticky-button span {
        font-size: 0.7rem;
    }
</style>
