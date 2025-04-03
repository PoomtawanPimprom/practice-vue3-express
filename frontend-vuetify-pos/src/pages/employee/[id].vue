<template>
     <v-container fluid class=" container">
        <Sidebar/>
         <v-container class="container-card" fluid>

          </v-container>
      </v-container>
</template>

<script>
import { useRoute } from 'vue-router';
import Sidebar from '@/components/sidebar.vue';

export default {
  components: { Sidebar },
  setup() {
    const route = useRoute();
    const employeeId = route.params.id; 
    return { employeeId };
  },
  data(){
    return{
      
    }
  },
  methods:{
    async getUserData() {
      
    }
  },
  mounted(){

  }

};
</script>
<style scoped>
.container {
    display: flex;
    height: 100vh;
    min-height: 100vh;
    padding: 0px 0px 0px 0px;
    margin: 0px;
}

.container-card {
    width: 100%;
    height: 100%;
}
</style>