<script>
import FooterTopListCard from './FooterTopListCard.vue';
export default {
    data() {
        return {
            footerData: [
                {
                    title: 'Recent Posts',
                    items: [
                        { link: 'https://avada.website/fitness/the-best-protein-shake/', text: '> The best protein shake' },
                        { link: 'https://avada.website/fitness/ultimate-cardio-workout/', text: '> Ultimate cardio workout' },
                        { link: 'https://avada.website/fitness/new-juices-available-now/', text: '> New juices avaiable now' },
                        { link: 'https://avada.website/fitness/tips-to-find-training-partners/', text: '> Tips to find training partners' },
                        { link: 'https://avada.website/fitness/20-best-healthy-recipes/', text: '> 20 best healthy recipes' },
                    ]
                },
                {
                    title: 'Contact Informations',
                    items: [
                        { text: '4746 Tipple Road Michigan 48449' },
                        { text: 'Mobile : 1.800.000.0000' },
                        { text: 'Email : info@your-company.com' },

                    ]
                },
                {
                    logo: '../assets/img/logo-2x.png',
                    text: 'Ac aliquam neque sagittis diam faucibusvitae purus turpis phasellus. Pellentesque consectetur amet purus ultrices mauris.',
                    items: [
                        { icon: '<i class="fa-brands fa-facebook-f"></i>', link: 'https://www.facebook.com/' },
                        { icon: '<i class="fa-solid fa-x"></i>', link: 'https://www.instagram.com/' },
                        { icon: '<<i class="fa-brands fa-instagram"></i>">', link: 'https://x.com/?lang=it' },
                        { icon: '<i class="fa-brands fa-youtube"></i>', link: 'https://www.youtube.com/' },
                        { icon: '<i class="fa-brands fa-linkedin-in"></i>', link: 'https://it.linkedin.com/' },
                    ]
                }
            ]
        }
    },

    components: {
        FooterTopListCard,
    }
}
</script>

<template>
    <div class="raw">
        <div class="col" v-for="(section, index) in footerData" :key="index" :title="section.title"
            :items="section.items" :logo="section.logo" :text="section.text">
            <FooterTopListCard class="container" :title="section.title" :items="section.items" :logo="section.logo"
                :text="section.text" />
        </div>
    </div>

</template>

<style scoped></style>