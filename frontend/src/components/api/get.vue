<script setup>
defineProps({
    userdata: { type: Array },
    error: { type: String, opional: true },
    loading: { type: Boolean, require: true }
})
</script>

<template>
    <div class="bg-emerald-500 p-8 mx-auto flex flex-col gap-3">
        <p class="text-3xl font-bold text-white">Get method</p>
        <p class="text-white text-xl">รายการผู้ใช้งาน</p>
        <div v-if="loading">
            loading jaa
        </div>
        <div v-else>
            <div v-for="(item, index) in userdata" :key="index">
                <div class="flex gap-2 text-white font-semibold">
                    <span>{{ item.id }}</span>
                    <span>{{ item.firstName }}</span>
                    <span>{{ item.lastName }}</span>
                </div>
            </div>
        </div>
    </div>
</template>