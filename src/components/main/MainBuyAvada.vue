<script>
export default {
    data() {
        return {

        }
    }
}

</script>

<template>
    <section>
        <div>
            <h1>"I've failed over and over again in my life. And that is why I succeed."</h1>
            <p id="simbol">simbol</p>
            <p class="description">Arcu auctor gravida nisl, congue sit nisi tincidunt eget proin. In lacinia lacus
                donec sed massa in ipsum eros, tristique. Gravida supendisse etiam in iaculis</p>
            <button class="base-btn">Buy avada today<i class="fa-solid fa-chevron-right fa-xs ms-3"></i></button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    height: 70vh;
    color: white;
    background: linear-gradient(transparent, black), url('../../assets/img/banner2-2x.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
}

section div {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);

    width: 500px;
}

h1 {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
}

p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
}

.base-btn,
i {
    line-height: 20px;
}

.base-btn {
    padding: 17px 40px;
    border-radius: 30px;
    border: 1px solid #4154FF;
    font-size: 18px;
    font-weight: 500;

    &:hover {
        border: 1px solid #FF414B;
    }
}

#simbol {
    color: #fff941;
}

.description {
    color: #98939f;
}


//Responsive

@media screen and (min-width:1020px) {
    section {
        height: 100vh;
    }

    section div {
        width: 600px;
    }

    h1 {
        font-size: 3.2rem;
        margin-bottom: 2rem;

    }

    p {
        font-size: 1.5rem;
        margin-bottom: 2rem;

    }

}
</style>
