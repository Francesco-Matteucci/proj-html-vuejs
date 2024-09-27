<script>
  import AppLogo from '../general/AppLogo.vue';

  export default {
    components: {
      AppLogo,
    },
    data() {
      return {
        recentPosts: [
          "The best protein shake",
          "Ultimate cardio workout",
          "New juices available now",
          "Tips to find training partners",
          "20 best healthy recipes",
        ],
        contactInfo: {
          address: "4746 Tipple Road Michigan 48449",
          phone: "Mobile: 1.800.000.0000",
          email: "info@your-company.com",
        },
        socialLinks: [
          { icon: "fab fa-facebook-f", link: "#" },
          { icon: "fab fa-x-twitter", link: "#" },
          { icon: "fab fa-instagram", link: "#" },
          { icon: "fab fa-youtube", link: "#" },
          { icon: "fab fa-linkedin-in", link: "#" }
        ],
      };
    },
  };
</script>

<template>
  <footer class="footer py-5 ">
    <div class="container">
      <div class="row text-md-start">

        <div class="col-12 col-md-4 mb-4 mb-md-0">
          <div class="logo-and-text text-center">
            <AppLogo />
            <p class="mt-3">Your health is our priority. Join us and start your journey to a better life.</p>
          </div>
          <div class="social-icons text-center mt-3">
            <a v-for="(social, index) in socialLinks" :key="index" :href="social.link" class="me-3 text-danger">
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>

        <div class="col-12 col-md-4 mb-4 mb-md-0 text-center">
          <h5 class="text-white">RECENT POSTS</h5>
          <ul class="list-unstyled">
            <li class="mb-2" v-for="(post, index) in recentPosts" :key="index">
              <i class="fa-solid fa-chevron-right"></i><a href="#" class="ms-2 text-decoration-none">{{ post
                }}</a>
            </li>
          </ul>
        </div>

        <div class="col-12 col-md-4  text-center">
          <h5 class="text-white">CONTACT INFORMATION</h5>
          <ul class="list-unstyled">
            <li id="contact-address" class="text-secondary"><i class="fas fa-map-marker-alt me-2 mb-3"></i>{{
              contactInfo.address
            }}</li>
            <li class="text-white"><i class="fas fa-mobile-alt me-2"></i>{{ contactInfo.phone }}</li>
            <li class="text-white"><i class="fas fa-envelope me-2"></i>{{ contactInfo.email }}</li>
          </ul>
        </div>
      </div>

      <hr class="footer-line my-4" />
      <div class="footer-bottom text-center">
        <p class="text-secondary small">© 2012 - 2024 • <a href="#" class="text-decoration-none">Avada</a> is a <a
            href="#" class="text-decoration-none">Website Builder</a> for <a href="#"
            class="text-decoration-none">WordPress</a>
          and <a href="#" class="text-decoration-none">eCommerce</a> • All Rights Reserved • Developed by <a href="#"
            class="text-decoration-none">TeamOne</a></p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .footer {
    background-color: #060607;
    color: #fff;

    .logo-and-text {

      img {
        width: 150px;
      }
    }

    .list-unstyled a,
    .footer-bottom a {
      color: #fff;

      &:hover {
        color: blue;
      }
    }

    .footer-line {
      border-top: 1px solid #333;
      margin: 1.5rem 0;
    }
  }
</style>
