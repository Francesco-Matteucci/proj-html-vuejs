<script>
  import AppMainPartnersListCard from "./AppMainPartnersListCard.vue";
  export default {
    data() {
      return {
        sponsors: [
          {
            "logo": "../../src/assets/img/sponsor-1-2x-200x103.png",
            "text": "Tristique aliquam in nullam habitassenunc, amet vel consectetur. Nulla insuspendisse dolor, aliquet.",
            "call": "Visit Yoga Studio >",
          },
          {
            "logo": "../../src/assets/img/sponsor-2-2x-200x103.png",
            "text": "Feugiat etiam dui mauris pharetramauris sed pharetra.Convallis sapienornare cras faucibus nulla porta dui a.",
            "call": "Join Fitness Center >",
          },
          {
            "logo": "../../src/assets/img/sponsor-3-2x.png",
            "text": "Nisl at quam adipiscing montes, nec, dipiscing commodo aliquam tincidunt. Ligula in habitant et sagittis imperdiet.",
            "call": "Learn About Fc >",
          },
          {
            "logo": "../../src/assets/img/sponsor-4-2x-200x103.png",
            "text": "Proin in viverra maecenas et mattis utnibh enim. Gravida ultricies mi portalacus. Et posuere velit sed nec eleifend.",
            "call": "Visit Power Gym >",
          },
        ]

      }
    },
    components: {
      AppMainPartnersListCard
    }
  }
</script>

<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-3" v-for="(sponsor, index) in sponsors" :key="index">
        <AppMainPartnersListCard :sponsorLogo="sponsor.logo" :sponsorTxt="sponsor.text" :sponsorCall="sponsor.call" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .row {
    animation: moveUp 1s ease-out;
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