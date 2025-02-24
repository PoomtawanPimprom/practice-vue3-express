<template>
    <v-container>
        <v-card class="pa-4">
            <v-card-title primary-title>POST Method</v-card-title>
            <v-card-text>
                <v-row>
                    <!-- User List -->
                    <v-col cols="12" sm="6">
                        <v-card>
                            <v-card-title primary-title> User List </v-card-title>
                            <v-card-text>
                                <div v-for="(userData, index) in usersData" :key="index">
                                    <v-row>
                                        <v-col cols="4">{{ userData.id }}</v-col>
                                        <v-col cols="4">{{ userData.fname }}</v-col>
                                        <v-col cols="4">{{ userData.lname }}</v-col>
                                    </v-row>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <!-- Input Form -->
                    <v-col cols="12" sm="6">
                        <v-card>
                            <v-card-title>
                                <p class="mb-0">Input Form</p>
                            </v-card-title>
                            <v-card-text>
                                <v-form ref="form" @submit.prevent="onSubmit">
                                    <v-text-field
                                        type="text"
                                        placeholder="First Name"
                                        label="First Name"
                                        v-model="formdata.fname"
                                        outlined
                                        clearable
                                    />
                                    <v-text-field
                                        type="text"
                                        placeholder="Last Name"
                                        label="Last Name"
                                        v-model="formdata.lname"
                                        outlined
                                        clearable
                                    />
                                    <v-row>
                                        <v-spacer></v-spacer>
                                        <v-btn type="submit" color="success">Submit</v-btn>
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
        usersData: Array,
        fetchUsersData: Function,
    },
    data() {
        return {
            formdata: {
                fname: "",
                lname: "",
            },
        };
    },
    methods: {
        async onSubmit() {
            try {
                const res = await fetch("http://localhost:8080/api/user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(this.formdata)
                })
                if(!res.ok) throw new Error(res.toString());
                this.$props.fetchUsersData()
                this.formdata = {}
            }
            catch (error) {
                console.log(error)

            }finally{
                this.formdata = { fname: "", lname: "" }
            }
        },
    }
}
</script>
