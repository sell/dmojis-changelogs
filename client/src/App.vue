<template>
  <v-app>
    <Navbar />
    <v-main>
      <vue-page-transition style="height: 100%" name="fade-in-right">
        <router-view />
      </vue-page-transition>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
