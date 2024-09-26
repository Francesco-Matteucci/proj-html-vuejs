<script>
import AppHeader from './components/header/AppHeader.vue';
import AppMain from './components/main/AppMain.vue'

export default {
    components: {
        AppHeader,
        AppMain
    }
};
</script>

<template>
    <div id="app">
        <AppHeader />
        <AppMain />
    </div>
</template>

<style scoped></style>
