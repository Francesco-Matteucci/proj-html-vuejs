<script>
import AppHeader from './components/header/AppHeader.vue';
import AppMain from './components/main/AppMain.vue';
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

<style scoped></style>
