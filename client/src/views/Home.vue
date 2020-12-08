<template>
  <div class="home">
    <home />
  </div>
</template>

<script>
// @ is an alias to /src
import home from '@/components/HomePage.vue';

export default {
  name: 'Home',
  components: {
    home,
  },
};
</script>
