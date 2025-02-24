<template>
    <v-container class="">
        <v-card class="" elevation="" max-width="">
            <v-card-title primary-title>
                GET Method
            </v-card-title>
            <v-card-text>
                <v-row v-for="(userData, index) in usersData" :key="index">
                    <v-col cols="2">{{ userData.id }}</v-col>
                    <v-col cols="2">{{ userData.fname }}</v-col>
                    <v-col cols="2">{{ userData.lname }}</v-col>
                </v-row>
                <v-row>
                    <v-spacer></v-spacer>
                    <v-btn @click="fetchUsersData()">refresh</v-btn>
                </v-row>
            </v-card-text>
        </v-card>

    </v-container>
</template>

<script>
export default {
    props: {
        fetchUsersData: Function,
        usersData: Array
    }
}
</script>