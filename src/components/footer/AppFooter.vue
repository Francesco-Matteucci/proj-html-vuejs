<script>
  import AppLogo from '../header/AppLogo.vue';

  export default {
    components: {
      AppLogo,
    },
  };
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content d-flex flex-wrap justify-content-between">
        <div class="footer-column col-md-4">
          <div class="logo-and-text">
            <AppLogo />
            <p class="mt-3">Your health is our priority. Join us and start your journey to a better life.</p>
          </div>
          <div class="social-icons mt-3">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>

        <div class="footer-column col-md-4">
          <h5>RECENT POSTS</h5>
          <ul class="recent-posts">
            <li><a href="#">The best protein shake</a></li>
            <li><a href="#">Ultimate cardio workout</a></li>
            <li><a href="#">New juices available now</a></li>
            <li><a href="#">Tips to find training partners</a></li>
            <li><a href="#">20 best healthy recipes</a></li>
          </ul>
        </div>

        <div class="footer-column col-md-4">
          <h5>CONTACT INFORMATION</h5>
          <ul class="contact-info">
            <li><i class="fas fa-map-marker-alt"></i> 4746 Tipple Road Michigan 48449</li>
            <li><i class="fas fa-mobile-alt"></i> Mobile: 1.800.000.0000</li>
            <li><i class="fas fa-envelope"></i> Email: info@your-company.com</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .footer {
    background-color: #060607;
    color: #fff;
    padding: 4rem 0;

    .footer-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .footer-column {
        margin-bottom: 2rem;

        h5 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #fff;
        }

        p {
          color: #93919F;
          font-size: 1rem;
          margin: 0;
        }

        ul {
          list-style: none;
          padding: 0;

          li {
            margin-bottom: 1rem;
            color: #93919F;
            font-size: 1rem;

            a {
              color: #93919F;
              text-decoration: none;

              &:hover {
                color: #fff;
              }
            }

            i {
              margin-right: 0.5rem;
              color: #fff;
            }
          }
        }

        .social-icons {
          display: flex;
          gap: 15px;

          a {
            color: #fff;
            font-size: 1.5rem;

            &:hover {
              color: #FF413C;
            }
          }
        }
      }

      .logo-and-text {
        max-width: 250px;

        img {
          width: 150px;
        }

        p {
          margin-top: 1rem;
        }
      }
    }

    @media (max-width: 768px) {
      .footer-content {
        flex-direction: column;
        align-items: center;

        .footer-column {
          width: 100%;
          text-align: center;
        }

        .social-icons {
          justify-content: center;
        }
      }
    }
  }
</style>
