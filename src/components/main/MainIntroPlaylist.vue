<script>


export default {
    data() {
        return {

        }
    }
}

</script>

<template>
    <section id="intro-playlist">
        <div class="intro-image">
            <img src="../../assets/img/service15-2x.jpg" alt="">
        </div>
        <ul class="intro-text">
            <li>
                <h3>Tune up your workouts</h3>
            </li>
            <li>
                <h2>The best health & fitness advice online</h2>
            </li>
            <li>
                <p>Arcu eu facilisi ut quisque placerat nunc habitant. Magna semper mauris, venenatis, leo integer sit
                    pellentesque.</p>
            </li>
            <!-- <li>Button</li> -->
        </ul>
    </section>
</template>

<style lang="scss" scoped>
section {
    display: flex;

    &>* {
        flex-basis: 50%;
    }

    img {
        max-width: 100%;
        height: auto;
        border-bottom-right-radius: 50px;
    }

    ul {
        list-style-type: none;
        margin-bottom: 0;
        margin-left: 2rem;
        padding: 5rem;

        li {
            margin-bottom: 2rem;
        }

        h3 {
            color: rgb(65, 84, 255);
        }

        h2 {
            font-size: 62px;
            color: #000;
        }

        p {
            font-size: 23px;
            color: rgb(126, 120, 135);
        }
    }

}

@media screen and (max-width: 1020px) {
    section {
        .intro-image {
            display: none;
        }

        ul {
            flex-basis: 100%;
            margin-left: 0;
        }
    }

}
</style>