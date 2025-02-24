<template>
    <v-container class="">
        <v-card>
            <v-card-title primary-title>
                PUT Method
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-card>
                            <v-card-title primary-title>
                                select user to update
                            </v-card-title>
                            <v-card-text>
                                <v-row v-for="(item, index) in users" :key="index">
                                    <v-col>{{ item.id }}</v-col>
                                    <v-col>{{ item.fname }}</v-col>
                                    <v-col>{{ item.lname }}</v-col>
                                    <v-btn @click="selectdata(item)">select</v-btn>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-card class="pa-4">
                            <v-card-title primary-title>
                                edit user
                            </v-card-title>
                            <v-card-text>
                                <v-form @submit.prevent="onSubmit" class="pa-1">
                                    <v-text-field name="fname" label="fname" id="id" clearable
                                        v-model="data.fname"></v-text-field>
                                    <v-text-field name="lname" label="lname" id="id" clearable
                                        v-model="data.lname"></v-text-field>
                                    <v-row>
                                        <v-spacer></v-spacer>
                                        <v-btn type="submit" elevation="" color="success">submit</v-btn>
                                    </v-row>

                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    props: {
        fetchUsersData: Function,
        users: Array
    },
    data() {
        return {
            data: { id: null, fname: null, lname: null }
        }

    },
    methods: {
        selectdata(data) {
            this.data = { id: data.id, fname: data.fname, lname: data.lname }
        },
        async onSubmit() {
            try {
                if (!this.data.id) {
                    console.error("User ID is missing.");
                    return;
                }
                const res = await fetch(`http://localhost:8080/api/user/${this.data.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(this.data)
                })

                if (!res.ok) throw new Error(res)
                this.$props.fetchUsersData()
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>