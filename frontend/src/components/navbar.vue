<script setup>

const navlist = [
    { href: "/about", label: "about" },
    { href: "/cart", label: "cart" },
    { href: "/login", label: "login" },
]

</script>

<template>
    <div class="container-navbar ">
        <div class="flex justify-between items-center">
            <a 
            class="flex p-2 bg-emerald-600 text-white rounded-xl uppercase font-bold"
            href="/">vue3 and express</a>
        </div>
        <div class="flex justify-between items-center ">
            <p class="hidden sm:block">

                search
            </p>
        </div>
        <div class="flex justify-between items-center gap-6" >
            <div class="" v-for="(item, index) in navlist" :key='index'>
                <a :href="item.href">{{ item.label }}</a>
            </div>
        </div>
    </div>
</template>

<style>
.container-navbar {
    padding: 1rem;
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>