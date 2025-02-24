<template>
    <v-container fluid>
      <Welcome/>
      <Navigation/>
    </v-container>
</template>

<script >
import Navigation from '@/components/home/Navigation.vue';
import Welcome from '@/components/home/Welcome.vue';

export default {
  components:{
    Welcome,
    Navigation
  }
}
</script>
