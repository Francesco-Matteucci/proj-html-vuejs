<script>
</script>

<template>
    <section id="intro-playlist">
        <div class="intro-image">
            <a href="#">
                <span class="play-icon"><i class="fas fa-play"></i></span>
            </a>
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
            <li><a class="base-btn" href="#"><i class="fa-brands fa-youtube me-2"></i>Visit my Youtube channel</a></li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
section {
    display: flex;

    &>* {
        flex-basis: 50%;
    }

    .intro-image {
        background-image: url('../../assets/img/service15-2x.jpg');
        background-size: cover;
        background-position: center;
        border-bottom-right-radius: 50px;
        position: relative;

        i {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

        }
    }


    ul {
        list-style-type: none;
        margin-bottom: 0;
        margin-left: 1rem;
        padding: 5rem;

        li {
            margin-bottom: 2rem;

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

            .base-btn {
                display: inline-block;
                font-size: 18px;
                font-weight: 500;
                padding: 17px 3rem;
                border-radius: 30px;
                background-color: #ff414b;

                &:hover {
                    background-color: rgb(65, 84, 255);
                }
            }
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