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
    <div class="dropdown-menu">
        <ul>
            <li v-for="item in menuItems" :key="item.text">
                <a class="dropdown-item" :href="item.link">{{ item.text }}</a>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
    .dropdown-menu {
        background-color: #000;
        display: none;
        padding: 0;
        border-radius: 5px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;

        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        li {
            padding: 0;
        }

        .dropdown-item {
            color: #98939F;
            padding: 1rem 1.5rem;
            font-size: 0.9rem;

            &:hover {
                background-color: #4154FF;
                color: white;
            }
        }

        .nav-item.dropdown:hover & {
            display: block;
        }
    }
</style>
