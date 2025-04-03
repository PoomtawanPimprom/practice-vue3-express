<template>
    <v-container class="">
        <sidebar />
        <v-container class="">
            <v-card class="" elevation="" max-width="">
                <v-card-title primary-title>
                    รายการสินค้า
                </v-card-title>
                <v-card-text>
                    <v-table>
                        <thead>
                            <th></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card-text>
                
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