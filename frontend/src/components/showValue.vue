<script setup>
const prop = defineProps({
    formdata: {
        type: Object,
        default: () => ({
            firstname: "-",
            lastname: '-',
            gender: "-"
        })
    }
})
</script>

<template>
    <div>
        <p>ชื่อ: {{ formdata.firstname }}</p>
        <p>นามสกุล: {{ formdata.lastname }}</p>
        <p>เพศ: {{ formdata.gender }}</p>
    </div>
</template>