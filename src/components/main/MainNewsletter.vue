<script>
    export default {
        data() {
            return { inputUserEmail: '' }
        },
        methods: {
            logEmail(email) {
                if (!email || email === '') {
                    return;
                } else {
                    console.log(email);
                }
            }
        },
    }
</script>

<template>
    <section id="newsletter">
        <div class="newsletter-body" data-aos="fade-right">
            <h3>Join our mailing list today</h3>
            <h2>Insider offers & flash sales in your inbox every week.</h2>
            <div class="text-warning">
                <i class="fa-solid fa-chevron-up icon-right"></i><i class="fa-solid fa-chevron-up"></i><i
                    class="fa-solid fa-chevron-up icon-left"></i>
            </div>
            <form @submit.prevent="logEmail(inputUserEmail)" class="input-email">
                <input @keyup.enter="logEmail(inputUserEmail)" v-model.trim="inputUserEmail" type="email"
                    placeholder="Insert your email ...*" required>
                <button class="base-btn" type="submit">Subscribe</button>
            </form>
            <p>
                Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet, consectetur
                adipiscing
                elit
                sed porttitor lectus.
            </p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #newsletter {

        background: linear-gradient(90deg, #000 47%, transparent 76%), url('../../assets/img/banner1-2x.jpg');
        background-size: cover;
        background-position: bottom 0 right 0;
        padding: 4rem;


        .newsletter-body {
            max-width: 70%;

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

            .input-email {

                input,
                input::placeholder {
                    font-size: 18px;
                }

                input {
                    width: 60%;
                    line-height: 50px;
                    padding: 0 1rem;
                    border-radius: 30px;
                    margin-right: 1.5rem;

                    &:focus {
                        outline: none;
                    }

                    &::placeholder {
                        color: rgb(152, 147, 159);
                    }
                }

                .base-btn {
                    font-size: 18px;
                    font-weight: 500;
                    padding: 16px 3rem;
                    border-radius: 30px;
                    border-color: rgb(65, 84, 255);

                    &:hover {
                        border-color: #ff414b;
                    }
                }
            }

            p {
                font-size: 23px;
                color: rgb(152, 147, 159);
                margin-bottom: 0;
            }
        }

    }

    @media screen and (max-width: 1020px) {
        #newsletter {
            .newsletter-body {
                max-width: 100%;

                .input-email input {
                    display: block;
                    width: 100%;
                    margin-bottom: 2rem;
                }

                .input-email .base-btn {
                    display: block;
                    width: 100%;
                }
            }
        }
    }
</style>