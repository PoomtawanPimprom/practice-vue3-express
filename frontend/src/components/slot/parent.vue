<template>
    <div class="flex bg-zinc-100  min-h-screen justify-center items-center ">
        <div class="w-96 bg-emerald-600 rounded-lg p-4">
            <p class="text-2xl uppercase font-bold text-white ">Hello from Parent area</p>
            <div class="flex justify-center p-4 h-full">
                <Child v-slot="{ counter }">
                    <slot>
                        <button @click="onClickFromParent"
                            class="uppercase px-4 py-2 cursor-pointer bg-emerald-600 w-fit h-fit text-white rounded-lg">button
                            from parent</button>
                    </slot>
                    <div class="flex flex-col">
                        <p class="text-2xl">counter from child :{{ counter }}</p>
                    </div>
                </Child>
            </div>
        </div>
    </div>
</template>
<script>
import Child from './child.vue';

export default {
    data() {
        
        return {

        };
    },
    methods: {
        onClickFromParent() {
            alert("onClick from parent")
        }
    },
    components: {
        Child
    }
}
</script>