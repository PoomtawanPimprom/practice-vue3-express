<template>
    <v-container fluid>
        <v-card variant="tonal">
            <v-card-title primary-title>
                title
            </v-card-title>
            <v-card-item>
                <v-row>
                    <v-col v-for="(item, index) in data" :key="index" cols="4">
                        <v-card>
                            <v-card-title>
                                {{ item.title }}
                            </v-card-title>
                            <v-card-actions class="justify-end">
                                <v-btn :to="item.href" color="success">{{ item.title }}</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-item>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { title: "Form", href: "/Form" },
                { title: "FetchAPI", href: "/FetchAPI" },
                { title: "About", href: "/About" },
                { title: "Profile", href: "/Profile" },
            ]
        }
    }
}
</script>