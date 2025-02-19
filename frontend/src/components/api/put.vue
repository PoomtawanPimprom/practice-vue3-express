<script setup>
import { reactive, ref } from "vue"

const prop = defineProps({
    refreshUser: Function,
    userData: Array,
})
const loading = ref(false)
const error = ref(null)


const selectedformdata = reactive({
    id: 0,
    firstName: "",
    lastName: ""
})

const onSubmit = async () => {
    try {
        // check case not selected
        if (!selectedformdata.id || !selectedformdata.firstName || !selectedformdata.lastName) return
        loading.value = true
        console.log(selectedformdata)
        const res = await fetch(`http://localhost:8080/api/users/${selectedformdata.id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(selectedformdata)
        })
        const data = res.json()
        if (!res.ok) { throw new Error(data.message) }
        error.value = null;
        prop.refreshUser();
        onReset();

    } catch (error) {
        error.value = error
    } finally {
        loading.value = false
    }

}

const onReset = () => {
    selectedformdata.id = 0
    selectedformdata.firstName = ""
    selectedformdata.lastName = ""
}

const onSelectuser = (data) => {
    selectedformdata.id = data.id
    selectedformdata.firstName = data.firstName
    selectedformdata.lastName = data.lastName
}

</script>
<template>
    <div class="bg-emerald-900 p-8 mx-auto ">
        <p class="text-3xl font-bold text-white">Put Method</p>
        <div v-if="loading">loading jaaaaaaa</div>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 mt-3">
            <div>
                <p class="text-white text-2xl">รายชื่อ</p>
                <div v-for="(item, index) in userData" :key="index" class="flex flex-col gap-4 p-2">
                    <div
                        class="flex justify-between w-80 font-semibold bg-white hover:bg-zinc-100 text-black p-2 rounded-lg">
                        <div class="flex items-center gap-4 ">

                            <span>{{ item.id }}</span>
                            <span>{{ item.firstName }}</span>
                            <span>{{ item.lastName }}</span>

                        </div>
                        <button @click="onSelectuser(item)" class="flex text-white rounded-lg bg-green-500 p-2"> แก้ไข
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="flex flex-col bg-white p-4 w-96 rounded-lg ">
                    <form class="flex flex-col p-4 space-y-1 text-black" @submit.prevent="onSubmit">
                        <p class="text-2xl font-bold">แก้ไขรายชื่อ</p>
                        <div class="flex flex-col space-y-2">
                            <label class=" text-lg uppercase">firstName</label>
                            <input class="border rounded-lg w-full bg-zinc-100 p-2" type="text"
                                v-model="selectedformdata.firstName">
                        </div>
                        <div class="input-container space-y-2">
                            <label class=" text-lg uppercase">lastname</label>
                            <input type="text" class="border rounded-lg w-full bg-zinc-100 p-2"
                                v-model="selectedformdata.lastName">
                        </div>
                        <div class="flex mt-2 flex-col sm:flex-row justify-end gap-2">
                            <button @click="onReset()" type="button" :disabled="loading"
                                class="px-6 py-2 w-full sm:w-fit  bg-white border rounded-lg disabled:opacity-5">ยกเลิก</button>
                            <button type="submit" :disabled="loading"
                                class="px-6 py-2 w-full sm:w-fit  bg-white border rounded-lg disabled:opacity-5">ส่ง</button>
                        </div>
                        <div v-if="error" style="color: red; margin-top: 10px;">{{ error }}</div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>