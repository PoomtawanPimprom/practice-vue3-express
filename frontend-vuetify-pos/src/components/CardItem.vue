<template>
    <v-card>
        <v-card-text class="pa-0">
            <div style="width: 100%; height: 150px; background-color: aquamarine;">
            </div>
            <div class="pa-3">
                <p class="product-name">
                    test
                </p>
                <div class="text--primary">
                    ราคา : 878 บาท
                </div>
            </div>
        </v-card-text>
        <template v-slot:actions>
            <v-spacer></v-spacer>
            <v-btn @click="load" :loading="loading" density="compact" icon="mdi-plus"></v-btn>

        </template>
    </v-card>
</template>

<script>
export default {
    props: {
        product: Object
    },
    data() {
        return {
            loading: false
        }
    },
    methods: {
        load() {
            this.loading = true
            setTimeout(() => (this.loading = false), 1000)
        },
    }
}
</script>

<style scoped>
.product-name {
    font-size: large;
    font-weight: 600;
}
</style>