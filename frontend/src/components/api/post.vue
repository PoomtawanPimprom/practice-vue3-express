<script setup>
import { reactive, ref } from "vue";
import LoadingComponent from '../loading.vue'

const props = defineProps({
    refreshUser: Function
})

const formdata = reactive({
    fname: "",
    lname: "",
})
const loading = ref(false)
const error = ref(null)

const onSubmit = async () => {
    try {
        loading.value = true

        if (!formdata.fname.trim() || !formdata.lname.trim()) {
            throw new Error("โปรดกรอกฟอร์ม")
        }
        await new Promise(resolve => setTimeout(resolve, 750));
        const res = await fetch("http://localhost:3000/api/user", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            }, body: JSON.stringify(formdata),
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.message)

        props.refreshUser()
        Object.assign(formdata, { fname: "", lname: "" });
        error.value = null
    } catch (error) {
        error.value = error.message
        console.log("error: " + error.message)
        console.log("error: " + error.value)
    } finally {
        loading.value = false
    }
}

const onReset = () => {
    formdata.fname = ""
    formdata.lname = ""
}
</script>

<template>
    <div class="bg-emerald-300 p-8 mx-auto ">
        <p class="text-3xl font-bold text-white">Post Method</p>
        <div v-if="loading"><LoadingComponent/></div>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 mt-3">
            <div>
                <form class="form-container p-4 space-y-2" @submit.prevent="onSubmit">
                    <div class="input-container space-y-2">
                        <label class="text-white text-xl uppercase">fname</label>
                        <input class="border rounded-lg w-full bg-zinc-100 p-2" type="text"
                            v-model="formdata.fname">
                    </div>
                    <div class="input-container space-y-2">
                        <label class="text-white text-xl uppercase">lname</label>
                        <input type="text" class="border rounded-lg w-full bg-zinc-100 p-2" v-model="formdata.lname">
                    </div>
                    <div class="flex flex-col sm:flex-row justify-end gap-2">
                        <button @click="onReset()" type="button"
                            class="px-6 py-2 w-full sm:w-fit  bg-white border rounded-lg">ยกเลิก</button>
                        <button type="submit" class="px-6 py-2 w-full sm:w-fit  bg-white border rounded-lg">ส่ง</button>
                    </div>
                    <div v-if="error" style="color: red; margin-top: 10px;">{{ error }}</div>
                </form>
            </div>
            <div class="flex justify-center">
                <div class="flex flex-col bg-white p-4 w-96 rounded-lg ">
                    <p class="uppercase font-bold text-2xl">
                        binding data
                    </p>
                    <div class="flex gap-2">
                        <span>fname :</span>
                        <span>{{ formdata.fname }}</span>
                    </div>
                    <div class="flex gap-2">
                        <span>lname :</span>
                        <span>{{ formdata.lname }}</span>
                    </div>
                    <div class="flex gap-2">
                        <span>Fullname :</span>
                        <span>{{ formdata.fname + " " + formdata.lname }}</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<style>
.input-container {
    display: flex;
    flex-direction: column;

}

.form-container {
    display: flex;
    flex-direction: column;

}
</style>