<script>
    import AppHeader from './components/header/AppHeader.vue';
    import AppMain from './components/main/AppMain.vue';
    import ScrollToTop from './components/ScrollToTop.vue';
    import AppFooter from './components/footer/AppFooter.vue';

    export default {
        components: {
            AppHeader,
            AppMain,
            ScrollToTop,
            AppFooter
        }
    };
</script>

<template>
    <div id="app">
        <AppHeader />
        <AppMain />
        <ScrollToTop />
        <AppFooter />
    </div>
</template>

<style>
    body {
        font-family: "Barlow Semi Condensed", system-ui;
    }
</style>
