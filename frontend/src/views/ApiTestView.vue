<script setup>
import { onMounted, ref } from "vue"
import GetComponent from "../components/api/get.vue"
import PostComponent from "../components/api/post.vue"
import PutComponent from "../components/api/put.vue"
import DeleteComponent from "../components/api/delete.vue"

const userdata = ref([])
const error = ref('')
const loading = ref(false)
const fetchdata = async () => {
    loading.value = true; // ตั้งค่าก่อนการ fetch
    try {
        const res = await fetch("http://localhost:3000/api/user", { method: "GET" });
        if (!res.ok) { throw new Error("เกิดข้อผิดพลาด"); }
        userdata.value = await res.json();
    } catch (err) {
        error.value = "Error: " + err.message;
    } finally {
        loading.value = false; // ตั้งค่าให้ false หลังจาก fetch เสร็จ
    }
}

onMounted(async () => {
    try {
        loading.value = true;
        console.log("try")
        await new Promise(resolve => setTimeout(resolve, 750));
        await fetchdata()

    } catch (error) {
        error.value = "Error: " + error
    }
    finally {
        console.log("finished")
        loading.value = false;
    }
})

</script>

<template>
    <div class="min-h-screen p-4 sm:p-6 bg-zinc-100 ">
        <div class="flex justify-center">
            <p class="text-6xl uppercase font-black my-16    ">api page</p>
        </div>
        <GetComponent :userdata="userdata" :loading="loading" :error="error" />
        <PostComponent :refreshUser="fetchdata" />
        <PutComponent :refreshUser="fetchdata" :userData="userdata" />
        <DeleteComponent :refreshData="fetchdata" :userData="userdata" />
    </div>
</template>
