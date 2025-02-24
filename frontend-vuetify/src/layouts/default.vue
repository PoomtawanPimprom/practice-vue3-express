<template>
  <v-app-bar>
    <v-app-bar-title>
      <v-btn to="/">logo</v-btn>
      
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn to="/cart">cart</v-btn>
    <v-btn to="/profile">profile</v-btn>
    <v-btn >

    </v-btn>
  </v-app-bar>
  <v-main>
    <router-view />
  </v-main>

</template>

<script lang="ts" setup>
  //
</script>
