<script>
    import AppDropdownMenu from './AppDropdownMenu.vue';

    export default {
        components: {
            AppDropdownMenu
        },
        data() {
            return {
                dropdownMenus: {
                    Services: [
                        { text: 'All Services', link: '#' },
                        { text: 'Service Single Page', link: '#' }
                    ],
                    About: [
                        { text: 'About Me', link: '#' },
                        { text: 'Our Sponsors', link: '#' },
                        { text: 'Contact', link: '#' }
                    ],
                    Videos: [
                        { text: 'All Playlists', link: '#' },
                        { text: 'Playlist Page', link: '#' },
                        { text: 'Video Single Page', link: '#' }
                    ],
                    Store: [
                        { text: 'Simple Product', link: '#' },
                        { text: 'Variable Product', link: '#' }
                    ]
                },
                activeDropdown: null,
                isMobile: window.innerWidth <= 768,
                searchVisible: false
            };
        },
        methods: {
            showDropdown(dropdownName) {
                this.activeDropdown = dropdownName;
            },
            hideDropdown() {
                this.activeDropdown = null;
            },
            toggleSearch() {
                this.searchVisible = !this.searchVisible;
            },
            handleResize() {
                this.isMobile = window.innerWidth <= 768;
                if (!this.isMobile) {
                    this.searchVisible = false;
                }
            }
        },
        mounted() {
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize);
        }
    };
</script>

<template>
    <div class="navbar container">
        <transition name="fade-slide">
            <div v-if="searchVisible && !isMobile" class="search-bar d-flex align-items-center">
                <input type="text" class="form-control" placeholder="Search..." />
                <a class="nav-link" @click="toggleSearch"><i class="fas fa-times"></i></a>
            </div>
        </transition>

        <transition name="fade-slide">
            <ul v-if="!searchVisible || isMobile" class="navbar-nav ms-auto w-100">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item dropdown" @mouseenter="showDropdown('Services')" @mouseleave="hideDropdown">
                    <a class="nav-link dropdown-toggle" href="#">Services</a>
                    <AppDropdownMenu v-if="activeDropdown === 'Services'" :menu-items="dropdownMenus.Services" />
                </li>
                <li class="nav-item dropdown" @mouseenter="showDropdown('About')" @mouseleave="hideDropdown">
                    <a class="nav-link dropdown-toggle" href="#">About</a>
                    <AppDropdownMenu v-if="activeDropdown === 'About'" :menu-items="dropdownMenus.About" />
                </li>
                <li class="nav-item dropdown" @mouseenter="showDropdown('Videos')" @mouseleave="hideDropdown">
                    <a class="nav-link dropdown-toggle" href="#">Videos</a>
                    <AppDropdownMenu v-if="activeDropdown === 'Videos'" :menu-items="dropdownMenus.Videos" />
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Blog</a>
                </li>
                <li class="nav-item dropdown" @mouseenter="showDropdown('Store')" @mouseleave="hideDropdown">
                    <a class="nav-link dropdown-toggle" href="#">Store <span>new</span></a>
                    <AppDropdownMenu v-if="activeDropdown === 'Store'" :menu-items="dropdownMenus.Store" />
                </li>
                <li class="nav-item">
                    <a :class="[isMobile ? 'nav-link' : 'nav-link base-btn text-white']" href="#">Schedule a workout</a>
                </li>
                <li v-if="!isMobile" class="nav-item">
                    <a class="nav-link" @click="toggleSearch">
                        <i class="fas fa-search"></i>
                    </a>
                </li>
                <li v-if="isMobile" class="nav-item search-bar-mobile">
                    <input type="text" class="form-control" placeholder="Search..." />
                </li>
                <li class="nav-item">
                    <a class="nav-link" v-if="!isMobile" href="#">
                        <i class="fas fa-shopping-cart"></i>
                    </a>
                    <a class="nav-link" v-if="isMobile" href="#">WooCommerce Cart</a>
                </li>
            </ul>
        </transition>
    </div>
</template>

<style scoped lang="scss">
    .navbar-nav .nav-link {
        color: #98939F;
        margin-right: 1.2rem;
        font-size: 1rem;

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
            padding: 0.35em 0.55em;
            margin-inline-start: 0.75em;
            font-size: 0.7em;
            border-radius: 2px;
        }
    }

    .search-bar {
        width: 100%;

        input {
            flex-grow: 1;
            border-radius: 30px;
            padding: 0.75rem 1.5rem;
            margin-right: 1rem;
        }

        .fa-times {
            font-size: 1.5rem;
            cursor: pointer;
        }
    }

    .search-bar-mobile input {
        border-radius: 30px;
        padding: 0.75rem 1.5rem;
        width: 100%;
    }


    /* Effetto di transizione */
    .fade-slide-enter-active,
    .fade-slide-leave-active {
        transition: opacity 0.5s ease, transform 0.5s ease;
    }

    .fade-slide-enter,
    .fade-slide-leave-to {
        opacity: 0;
        transform: translateY(-20px);
    }

    .fade-slide-leave-active {
        transform: translateY(20px);
    }
</style>
