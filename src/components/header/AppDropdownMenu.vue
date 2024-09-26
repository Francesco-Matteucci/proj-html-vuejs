<script>
    export default {
        props: {
            menuItems: {
                type: Array,
                required: true
            }
        }
    };
</script>

<template>
    <ul class="dropdown-menu">
        <li v-for="item in menuItems" :key="item.text">
            <a class="dropdown-item">{{ item.text }}</a>
        </li>
    </ul>
</template>

<style scoped lang="scss">
    .dropdown-menu {
        margin-top: 20px;
        background-color: #060607;
        border: none;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

        .dropdown-item {
            text-align: center;
            color: #fff;
            font-size: 0.7rem;

            &:hover {
                background-color: #4154FF;
            }
        }
    }
</style>