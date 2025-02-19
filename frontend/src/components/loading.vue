<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    loading: {
        type: Boolean,
        default: true
    },
    text: {
        type: String,
        default: 'กำลังโหลด...'
    },
    containerClass: {
        type: String,
        default: 'p-4'
    },
    pulseEffect: {
        type: Boolean,
        default: true
    }
})
</script>

<template>
    <div class="flex justify-center items-center" :class="containerClass">
        <div class="relative">
            <!-- Spinner -->
            <div class="w-12 h-12 rounded-full border-4 border-gray-200" :class="{ 'animate-pulse': pulseEffect }"></div>
            <div
                class="absolute top-0 left-0 w-12 h-12 rounded-full border-t-4 border-l-4 border-blue-500 animate-spin">
            </div>

            <!-- Loading text (optional) -->
            <div v-if="text" class="mt-3 text-center text-gray-600">{{ text }}</div>
        </div>
    </div>
</template>

