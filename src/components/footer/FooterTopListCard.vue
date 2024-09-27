<script>
export default {
    data() {
        return {

        }
    },
    props: {
        title: {
            type: String,
            required: true,

        },
        items: {
            type: Array,
            required: true,

        },
        logo: {
            type: String,
            required: true,

        },
        text: {
            type: String,
            required: true,

        },


    }
}
</script>

<template>
    <h2>card</h2>
</template>

<style scoped></style>