<script>
export default {
};
</script>

<template>
    <section class="hero">
        <div class="container d-flex">
            <div>
                <p class="hero-cert">Certified fitness professional</p>
                <h1 class="hero-title">Take control of your health</h1>
                <p class="hero-subtitle">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit
                    amet.</p>
                <a class="btn base-btn" href="#"><i class="fa-brands fa-youtube me-2"></i>Visit my YouTube
                    channel</a>
                <a class="btn base-btn-avada ms-4" href="#">Buy Avada today<i
                        class="ms-2 fa-solid fa-arrow-right"></i></a>
            </div>
            <div class="play-icon text-center d-none d-md-block"><i class="fas fa-play"></i></div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.hero {
    background: linear-gradient(to right, black 40%, transparent), url('../../assets/img/slider82x-scaled.jpg');
    background-size: cover;
    background-position: center right;
    color: white;
    padding: 3rem 0;
    min-height: 600px;

    .hero-cert {
        color: #FF413C;
        font-size: 1.3rem;
        font-weight: 500;
        margin-bottom: 1.2rem;
    }

    .hero-title {
        font-size: 4rem;
        margin-bottom: 4rem;
    }

    .hero-subtitle {
        color: #93919F;
        font-size: 1.2rem;
        margin-bottom: 3rem;
    }

    a {
        padding: 17px 40px;
        line-height: 21px;
        font-size: 18px;
        border-radius: 30px;
    }

    .base-btn-avada {
        color: #fff;
        border: 1px solid #333333;
        text-decoration: none;

        margin: 20px 0;

        &:hover {
            background-color: #fff;
            color: #333333;
        }
    }
}
</style>
