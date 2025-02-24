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

export default {
  data() {
    return {
      userdata: [],
    };
  },
  methods: {
    async getuser() {
      try {
        const res = await fetch("http://localhost:8080/api/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        this.userdata = await res.json();
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
