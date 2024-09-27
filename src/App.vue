<script>
    import AppHeader from './components/header/AppHeader.vue';
    import AppMain from './components/AppMain.vue';
    import ScrollToTop from './components/ScrollToTop.vue';

    export default {
        components: {
            AppHeader,
            AppMain,
            ScrollToTop
        }
    };
</script>

<template>
    <div id="app">
        <AppHeader />
        <AppMain />
        <ScrollToTop />
    </div>
</template>
<style>
    body {
        font-family: 'Barlow Semi Condensed', sans-serif;
    }
</style>
