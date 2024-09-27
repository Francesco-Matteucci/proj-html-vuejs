<script>
    import AppLogo from './AppLogo.vue';
    import AppNavigation from './AppNavigation.vue';
    import StickyButtons from './StickyButtons.vue';

    export default {
        components: {
            AppLogo,
            AppNavigation,
            StickyButtons
        },
        data() {
            return {
                isMenuOpen: false
            };
        },
        methods: {
            toggleMenu() {
                this.isMenuOpen = !this.isMenuOpen;
            }
        }
    };
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-dark">
            <div class="container d-flex justify-content-between">
                <AppLogo />
                <button class="navbar-toggler" type="button" @click="toggleMenu" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div :class="['collapse', 'navbar-collapse', { show: isMenuOpen }]" id="navbarNav">
                    <AppNavigation />
                </div>
            </div>
        </nav>
        <StickyButtons />
    </header>
</template>

<style scoped lang="scss">
    .navbar {
        background-color: #000;
        flex-grow: 0;
    }

    .navbar-toggler {
        border: none;

        &:focus {
            outline: none;
        }
    }

</style>
