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
        <div class="banner-container">
            <div class="circle-button"> <a href="#"></a> <i class="fa-solid fa-play"></i></div>
            <h2>Crossfit Workout of the day</h2>
            <h3>November 15th, 2019</h3>
            <h5>View all Videos <a href="https://avada.website/fitness/playlist/"></a> <span
                    class="arrow-right">&rarr;</span></h5>

        </div>
    </section>
</template>

<style scoped>
.banner-container {
    background: linear-gradient(to bottom, rgba(3, 3, 205, 0.5), rgba(144, 10, 10, 0.5)), url(../assets/img/banner14-2x.jpg);
    background-size: cover;
    background-position: center;
    min-height: 400px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    animation: moveUp 1s ease-out;
}

.circle-button {
    position: relative;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: white;
}

i {
    position: absolute;
    color: blue;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    cursor: pointer;

}

i:hover {
    color: red;
    transition: color 0.2s ease;
    transition-delay: 0.1s;
}

h2 {
    color: white;
    font-weight: bold;
    text-align: center;
}

h3 {
    color: #FFFE24;
    font-weight: bold;
    text-align: center;
}

h5 {
    color: white;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
}

@keyframes moveUp {
    0% {
        transform: translateY(100px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>