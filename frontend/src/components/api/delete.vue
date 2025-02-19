<script setup>
import { ref } from "vue";
import LoadingComponent from '../loading.vue'

const prop = defineProps({
    refreshData: Function,
    userData: Array,
})

const loading = ref(false)

const onDeleteById = async (id) => {
    try {
        loading.value = true
        await new Promise(resolve => setTimeout(resolve, 750));
        const res = await fetch(`http://localhost:3000/api/user/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
        prop.refreshData();

    } catch (error) {
        console.log(error.message)
    }finally{
        loading.value = false
    }
}
</script>

<template>
    <div class="bg-emerald-800 p-8 mx-auto ">
        <p class="text-3xl font-bold text-white">Delete method</p>
        <p class="text-white text-xl">รายการผู้ใช้งาน</p>
        <div v-if="loading">
            <LoadingComponent/>
        </div>
        <div v-else>
            <div v-for="(item, index) in userData" :key="index" class="flex flex-col gap-4 p-2">
                <div class="flex justify-between max-w-80    font-semibold bg-white hover:bg-zinc-100 text-black p-2 rounded-lg">
                    <div class="flex gap-2">
                        <span>{{ item.id }}</span>
                        <span>{{ item.fname }}</span>
                        <span>{{ item.lname }}</span>
                    </div>
                    <button @click="onDeleteById(item.id)" class="w-[40px] h-[40px] bg-red-500 rounded-lg hover:bg-red-400 " >-</button>
                </div>
            </div>
        </div>
    </div>
</template>