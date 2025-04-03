<template>
  <v-container fluid class="container pa-0">
    <Sidebar />
    <v-container>
      <v-row>
        <v-col cols="">
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
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-card-title primary-title>
              รายการชำระ
            </v-card-title>
            <v-card-text>

            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" color="success">
                ชำระเงิน
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import Sidebar from '@/components/sidebar.vue';
import CardItem from '@/components/cardItem.vue';

export default {
  components: { CardItem, Sidebar },
  data() {
    return {
      cartData: []
    }

  },
  methods: {
    addCart(data) {
      this.cartData.push(data);
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  min-height: 100vh;
  padding: 0px 0px 0px 0px;
  margin: 0px;
}
</style>
