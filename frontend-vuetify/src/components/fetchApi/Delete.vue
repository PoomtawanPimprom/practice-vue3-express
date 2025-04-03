<template>
    <v-container fuied>
        <v-card >
            <v-card-title primary-title>
                DELETE Method
            </v-card-title>
            <v-card-text>
                    <v-row v-for="(user,index) in usersData" :key="index">
                        <v-col >{{ user.id }}</v-col>
                        <v-col >{{ user.fname }}</v-col>
                        <v-col >{{ user.lname }}</v-col>
                        <v-btn color="cancel" @click="this.deleteUser(user)">
                            delete
                        </v-btn>
                    </v-row>
            </v-card-text>
            
        </v-card>
    </v-container>
</template>

<script>
import { deleteUserById } from '@/service/user/service';

export default {
    props: {
        usersData: Array,
        fetchUsersData: Function
    },
    methods: {
        async deleteUser(user){
           try {
            await deleteUserById(user.id)
            this.$props.fetchUsersData()
           } catch (error) {
            console.log(error)
           }
        }

    }
}
</script>