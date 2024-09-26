<script>
    import AppDropdownMenu from './AppDropdownMenu.vue';

    export default {
        components: {
            AppDropdownMenu
        },
        data() {
            return {
                dropdownMenus: {
                    'Services': [
                        { text: 'All Services' },
                        { text: 'Service Single Page' }
                    ],
                    'About': [
                        { text: 'About Me' },
                        { text: 'Our Sponsor' },
                        { text: 'Contact' }
                    ],
                    'Videos': [
                        { text: 'All Playlists' },
                        { text: 'Playlist Page' },
                        { text: 'Video Single Page' }
                    ],
                    'Store': [
                        { text: 'Simple Product' },
                        { text: 'Variable Product' }
                    ]
                },
                activeDropdown: null
            };
        },
        methods: {
            openDropdown(dropdownName) {
                this.activeDropdown = dropdownName;
            },
            closeDropdown() {
                this.activeDropdown = null;
            }
        }
    };
</script>

<template>
    <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item dropdown" @mouseover="openDropdown('Services')" @mouseleave="closeDropdown">
                <a class="nav-link dropdown-toggle" href="#">Services</a>
                <AppDropdownMenu v-if="activeDropdown === 'Services'" :menu-items="dropdownMenus['Services']" />
            </li>
            <li class="nav-item dropdown" @mouseover="openDropdown('About')" @mouseleave="closeDropdown">
                <a class="nav-link dropdown-toggle" href="#">About</a>
                <AppDropdownMenu v-if="activeDropdown === 'About'" :menu-items="dropdownMenus['About']" />
            </li>
            <li class="nav-item dropdown" @mouseover="openDropdown('Videos')" @mouseleave="closeDropdown">
                <a class="nav-link dropdown-toggle" href="#">Videos</a>
                <AppDropdownMenu v-if="activeDropdown === 'Videos'" :menu-items="dropdownMenus['Videos']" />
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item dropdown" @mouseover="openDropdown('Store')" @mouseleave="closeDropdown">
                <a class="nav-link dropdown-toggle" href="#">Store <span>new</span></a>
                <AppDropdownMenu v-if="activeDropdown === 'Store'" :menu-items="dropdownMenus['Store']" />
            </li>
            <li class="nav-item">
                <a class="nav-link base-btn text-white" href="#">Schedule a workout</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-search"></i> </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-shopping-cart"></i>
                </a>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
    .navbar-collapse {
        flex-grow: 0;
    }

    .navbar-nav {
        .nav-link {
            color: #98939F;
            margin-right: 0.8rem;
            font-size: 0.9rem;

            &:hover {
                color: #fff;
            }

            &.active {
                color: #fff;
                font-weight: 500;
            }

            span {
                background-color: #FFF941;
                color: #000;
                padding: .35em .55em;
                line-height: 1;
                margin-inline-start: .75em;
                font-size: .7em;
                border-radius: 2px;
            }
        }

    }

    .dropdown:hover .dropdown-menu {
        display: block;
    }
</style>