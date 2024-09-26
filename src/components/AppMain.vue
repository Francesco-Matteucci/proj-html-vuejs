<script>
import AppMainPartnersList from './AppMainPartnersList.vue';
import AppMainCrossfitDay from './AppMaincrossfitDay.vue';
export default {
  data() {
    return {

    }
  },
  components: {
    AppMainPartnersList,
    AppMainCrossfitDay
  }
}
</script>

<template>
  <div id="app">

    <AppMainPartnersList />
    <AppMainCrossfitDay />
  </div>


</template>

<style scoped></style>