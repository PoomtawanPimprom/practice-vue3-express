<script>
import LoadingComponent from '../loading.vue';

export default {
    props: {
        refreshUser: Function
    },
    data() {
        return {
            formdata: {
                fname: "",
                lname: ""
            },
            loading: false,
            error: null
        };
    },
    methods: {
        async onSubmit() {
            try {
                this.loading = true;

                if (!this.formdata.fname.trim() || !this.formdata.lname.trim()) {
                    throw new Error("โปรดกรอกฟอร์ม");
                }
                await new Promise(resolve => setTimeout(resolve, 750));
                const res = await fetch("http://localhost:3000/api/user", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(this.formdata),
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.message);

                this.refreshUser();
                this.formdata.fname = "";
                this.formdata.lname = "";
                this.error = null;
            } catch (error) {
                this.error = error.message;
                console.log("error: " + error.message);
                console.log("error: " + this.error);
            } finally {
                this.loading = false;
            }
        },
        onReset() {
            this.formdata.fname = "";
            this.formdata.lname = "";
        }
    },
    components: {
        LoadingComponent
    }
};
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