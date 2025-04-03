<template>
    <v-container class="">
        <v-card>
            <v-card-title primary-title>
                รายการสินค้า
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="3">
                        <CardItem />
                    </v-col>
                    <v-col cols="3">
                        <CardItem />
                    </v-col>
                    <v-col cols="3">
                        <CardItem />
                    </v-col>
                    <v-col cols="3">
                        <CardItem />
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-btn text color="">

                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    props: {
        products: Array
    }
}
</script>