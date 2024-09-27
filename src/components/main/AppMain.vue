<script>
import BaseHero from './BaseHero.vue';
import TestimonialSection from './TestimonialSection.vue';
import IntroPlaylist from './MainIntroPlaylist.vue';
import BaseMediaList from '../general/BaseMediaList.vue';
import Newsletter from './MainNewsletter.vue';

export default {
    data() {
        return {
            featuredPlaylist: {
                textTop: {
                    titleSection: 'Featured Playlists',
                    textRight: 'View all videos'
                },
                media: [
                    {
                        src: "video2-2x.jpg",
                        titleMedia: "Thighs & Glutes workout",
                        subtitleMedia: "Increase your mobility"
                    },
                    {
                        src: "video7-2x.jpg",
                        titleMedia: "Lift, firm & perk up",
                        subtitleMedia: "Feel young again"
                    },
                    {
                        src: "video9-2x.jpg",
                        titleMedia: "Slim & trim your waist",
                        subtitleMedia: "Shed those extra pounds"
                    }
                ],
                playButton: true,
                styleText: 'text-center',
                styleParagraph: 'text-different'
            },
            latestArticles: {
                textTop: {
                    titleSection: 'Latest Articles',
                    textRight: 'Read all articles'
                },
                media: [
                    {
                        src: "blog4-2x.jpg",
                        titleMedia: "The best protein shake",
                        subtitleMedia: "Published On: November 26th, 2019",
                        comments: "| 2 Comments"
                    },
                    {
                        src: "blog1-2x.jpg",
                        titleMedia: "Ultimate Cardio workout",
                        subtitleMedia: "Published On: November 26th, 2019",
                        comments: "| 0 Comments"
                    },
                    {
                        src: "blog3-2x.jpg",
                        titleMedia: "New Juices available now",
                        subtitleMedia: "Published On: November 26th, 2019",
                        comments: "| 0 Comments"
                    }
                ],
                playButton: false,
            },
        }
    },
    components: {
        BaseHero,
        TestimonialSection,
        IntroPlaylist,
        BaseMediaList,
        Newsletter,
        BaseMediaList,
    }
}

</script>

<template>
    <main>
        <BaseHero />
        <TestimonialSection />
        <IntroPlaylist />
        <BaseMediaList :data="featuredPlaylist" />
        <Newsletter />
        <BaseMediaList :data="latestArticles" />
    </main>
</template>

<style scoped></style>