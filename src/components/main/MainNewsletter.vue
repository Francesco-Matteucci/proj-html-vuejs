<script>


export default {
    data() {
        return {
            inputUserEmail: ''
        }
    },
    methods: {
        logEmail(email) {
            console.log(email);
        }
    },
    components: {

    }
}

</script>

<template>
    <section id="newsletter">
        <div class="newsletter-body">
            <h3>Join our mailing list today</h3>
            <h2>Insider offers & flash sales in your inbox every week.</h2>
            <div class="input-email">
                <input @keyup.enter="logEmail(inputUserEmail)" v-model="inputUserEmail" type="email"
                    placeholder="Insert your email ...*">
            </div>
            <!-- BaseButton -->
            <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet, consectetur
                adipiscing
                elit
                sed porttitor lectus.</p>
        </div>
    </section>
</template>

<style scoped>
#newsletter {

    background: linear-gradient(90deg, #000 47%, transparent 76%), url('../../assets/img/banner1-2x.jpg');
    background-size: cover;
    background-position: bottom 0 right 0;
    padding: 5rem;


    .newsletter-body {
        max-width: 60%;

        >* {
            margin-bottom: 2rem;
        }

        h3 {
            color: rgb(255, 65, 75);
        }

        h2 {
            font-size: 58px;
            color: #fff;
        }

        input,
        input::placeholder {
            font-size: 18px;
        }

        input {
            width: 60%;
            line-height: 55px;
            padding: 0 1rem;
            border-radius: 30px;

            &:focus {
                outline: none;
            }

            &::placeholder {
                color: rgb(152, 147, 159);
            }
        }

        p {
            font-size: 23px;
            color: rgb(152, 147, 159);
            margin-bottom: 0;
        }
    }

}
</style>