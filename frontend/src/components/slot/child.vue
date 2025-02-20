<template>
    <div class="flex flex-col items-center p-4 size-80 bg-zinc-50 rounded-lg gap-2">
        <p class="text-lg uppercase font-bold text-black ">Hello from child area</p>
        <slot :counter="counter"></slot>
        <div class="flex flex-col bg-zinc-200 rounded-lg p-4 gap-2">
            <p class="text-lg uppercase font-semibold">value in child</p>
            <div class="flex gap-2">
                <button 
                @click="addCounter"
                class="cursor-pointer bg-zinc-50 px-6 py-2  rounded-lg">counter++</button>
                <button 
                @click="minusCounter"
                class="cursor-pointer bg-zinc-50 px-6 py-2  rounded-lg">counter--</button>

            </div>
            <p>counter: {{ counter }}</p>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        
        const counter = 0
        return {
            counter,
        }
    },
    methods:{
        addCounter(){
            this.counter++
        },
        minusCounter(){
            if(this.counter ==0) return null
            this.counter--
        }
    }
    }
</script>