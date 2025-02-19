<script setup>

const navlist = [
    { href: "/about", label: "about" },
    { href: "/cart", label: "cart" },
    { href: "/login", label: "login" },
]

</script>

<template>
    <div class="container-navbar">
        <div class="part">
            <a href="/">Home</a>
        </div>
        <div class="part ">
            <p class="hidden sm:block">

                search
            </p>
        </div>
        <div class="part" v-for="(item, index) in navlist" :key='index'>
            <a :href="item.href">{{ item.label }}</a>
        </div>
    </div>
</template>

<style>
.container-navbar {
    padding: 1rem;
    width: 100%;
    background: #fff;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.part {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>