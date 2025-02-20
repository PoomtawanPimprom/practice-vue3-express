<script>
import LoadingComponent from '../loading.vue';

export default {
    props: {
        userdata: { type: Array },
        error: { type: String, optional: true },
        loading: { type: Boolean, required: true }
    },
    components: {
        LoadingComponent
    }
};
</script>

<template>
    <div class="bg-emerald-500 p-8 mx-auto flex flex-col gap-3">
        <p class="text-3xl font-bold text-white">Get method</p>
        <p class="text-white text-xl">รายการผู้ใช้งาน</p>
        <div v-if="loading">
            <LoadingComponent />
        </div>
        <div v-else>
            <div v-for="(item, index) in userdata" :key="index">
                <div class="flex gap-2 text-white font-semibold">
                    <span>{{ item.id }}</span>
                    <span>{{ item.fname }}</span>
                    <span>{{ item.lname }}</span>
                </div>
            </div>
        </div>
    </div>
</template>