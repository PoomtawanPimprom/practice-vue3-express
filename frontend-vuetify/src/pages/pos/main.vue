<template>
    <v-container class="container" fluid>
        <sidebar />
        <v-container class="">
            <v-card class="" elevation="" max-width="">
                <v-card-title primary-title>
                    หน้าหลัก
                </v-card-title>
                <v-card-text>
                    <p class="">

                    </p>
                    <div class="text--primary">

                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-btn text color="">

                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </v-container>
</template>

<script>
import sidebar from '../../components/POS/sidebar.vue'
export default {
    components: { sidebar },

}
</script>

<style scoped>
    .container {
        display: flex;
        height: 100vh;
        min-height: 100vh;
        padding: 0px;
        margin: 0px;
    }
</style>