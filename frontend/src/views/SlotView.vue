<template>
    <div class="flex flex-col bg-emerald-700 min-h-screen justify-center ">
        <div class="flex flex-col w-full gap-2 h-96 justify-center items-center py-16 px-32">
            <p class="text-6xl text-white uppercase font-bold">{{ this.title }}</p>
            <p class="text-xl text-zinc-50 uppercase font-medium  text-center">{{this.subtitle}}</p>
            </div>
        <Parent/>
    </div>
</template>
<script>
    import Parent from '@/components/slot/parent.vue';
    export default {
        
        components:{
            Parent
        },
        data:()=>{
            const title = "tag slot";
            const subtitle = "สามารถทำการส่ง Node จาก parent ไปยัง child ได้นอกจากนี้ข้อดีคือที่ child สามารถส่งของกลับได้ด้วย เช่น ตัวแปร functions";

            return{
                title,subtitle
            }
        }


    }
</script>