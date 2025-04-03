<template>
  <v-container>
    <Get :usersData="this.userdata" :fetchUsersData="this.getuser" />
    <Post :usersData="this.userdata" :fetchUsersData="this.getuser" />
    <Put :users="this.userdata" :fetchUsersData="this.getuser"/>
    <Delete :usersData="this.userdata" :fetchUsersData="this.getuser"/>
  </v-container>
</template>

<script>
import Get from "@/components/fetchApi/Get.vue";
import Post from "@/components/fetchApi/Post.vue";
import Put from "@/components/fetchApi/Put.vue";
import Delete from "@/components/fetchApi/Delete.vue";
import { getAlluser } from "@/service/user/service";

export default {
  data() {
    return {
      userdata: [],
    };
  },
  methods: {
    async getuser() {
      try {
        this.userdata = await getAlluser();
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการโหลดข้อมูล ❌", error);
      }
    },
  },
  mounted() {
    this.getuser();
  },
  components: {
    Get,
    Post,
    Put,
    Delete,
  },
};
</script>
