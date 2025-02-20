<script>
import { reactive, ref } from "vue"
import LoadingComponent from '../loading.vue'
export default {
    props: {
        refreshUser: Function,
        userData: Array,
    },
    data() {
        return {
            loading: false,
            error: null,
            selectedformdata: {
                id: 0,
                fname: "",
                lname: "",
            }
        }
    },
    components: {
        LoadingComponent
    },
    methods: {
        async onSubmit() {
            try {
                loading.value = true
                // check case not selected
                if (!selectedformdata.id || !selectedformdata.fname || !selectedformdata.lname) return
                console.log(selectedformdata)
                await new Promise(resolve => setTimeout(resolve, 750));
                const res = await fetch(`http://localhost:3000/api/user/${selectedformdata.id}`, {
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
        },
        onReset() {
            selectedformdata.id = 0
            selectedformdata.fname = ""
            selectedformdata.lname = ""
        },
        onSelectuser() {
            selectedformdata.id = data.id
            selectedformdata.fname = data.fname
            selectedformdata.lname = data.lname
        }

    }
}

</script>
<template>
    <div class="bg-emerald-900 p-8 mx-auto ">
        <p class="text-3xl font-bold text-white">Put Method</p>
        <div v-if="loading">
            <LoadingComponent />
        </div>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 mt-3">
            <div>
                <p class="text-white text-2xl">รายชื่อ</p>
                <div v-for="(item, index) in userData" :key="index" class="flex flex-col gap-4 p-2">
                    <div
                        class="flex justify-between max-w-80 font-semibold bg-white hover:bg-zinc-100 text-black p-2 rounded-lg">
                        <div class="flex items-center gap-4 ">

                            <span>{{ item.id }}</span>
                            <span>{{ item.fname }}</span>
                            <span>{{ item.lname }}</span>

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
                            <label class=" text-lg uppercase">fname</label>
                            <input class="border rounded-lg w-full bg-zinc-100 p-2" type="text"
                                v-model="selectedformdata.fname">
                        </div>
                        <div class="input-container space-y-2">
                            <label class=" text-lg uppercase">lname</label>
                            <input type="text" class="border rounded-lg w-full bg-zinc-100 p-2"
                                v-model="selectedformdata.lname">
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