<template>
    <v-container class="container" fluid>
        <sidebar />
        
    </v-container>
</template>

<script>
import sidebar from '../components/POS/sidebar.vue'
export default {
    components: { sidebar },

}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: start;
    min-height: 100vh;
    height: 100vh;
    padding: 0px;
    margin: 0px 0px 0px 0px ;
}
.card-container{
    height: 100%;
}
</style>