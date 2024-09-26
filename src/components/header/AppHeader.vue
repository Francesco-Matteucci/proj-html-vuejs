<script>
    import AppLogo from './AppLogo.vue';
    import AppNavigation from './AppNavigation.vue';

    export default {
        components: {
            AppLogo,
            AppNavigation
        }
    };
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-md d-flex justify-content-between align-item-center container">
            <AppLogo />
            <AppNavigation />
        </nav>
    </header>
</template>

<style scoped lang="scss">
    header {
        background-color: #060607;
        padding: 1rem 0;

        .navbar {
            line-height: 100%;
            vertical-align: middle;
        }
    }
</style>