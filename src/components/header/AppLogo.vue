<script>
    export default {
        methods: {
            refreshPage() {
                window.location.reload();
            }
        }
    };
</script>

<template>
    <a class="navbar-brand" href="#" @click.prevent="refreshPage">
        <img src="../../assets/img/logo.png" alt="Logo del sito">
    </a>
</template>

<style scoped lang="scss">
    .navbar-brand img {
        height: 30px;
    }
</style>