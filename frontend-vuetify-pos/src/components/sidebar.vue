<template>
    <div class="sidebar">
        <nav class="nav-menu">
            <div v-for="(item, index) in navlist" :key="index" class="nav-item"
                :class="{ active: isActive(item.href) }">
                <router-link :to="item.href" class="nav-link">
                    <span class="nav-text">{{ item.name }}</span>
                </router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navlist: [
                { href: "/", name: "หน้าหลัก", icon: "mdi-home" },
                { href: "/productlist", name: "รายการสินค้า", icon: "mdi-view-list" },
                { href: "/stock", name: "คลังสินค้า", icon: "mdi-package-variant-closed" },
                { href: "/employee", name: "รายชื่อพนักงาน", icon: "mdi-package-variant-closed" },
            ]
        }
    },
    methods: {
        isActive(route) {
            return this.$route.path === route;
        }
    }
}
</script>

<style scoped>
.sidebar {
    width: 220px;
    height: 100%;
    background: #86CB92;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
}

.nav-menu {
    padding: 20px 0;
    width: 100%;
}

.nav-item {
    padding: 0;
    margin: 4px 12px;
    border-radius: 8px;
    transition: all 0.2s ease;
}

.nav-item:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

.nav-item.active {
    background-color: rgba(255, 255, 255, 0.3);
}

.nav-link {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    color: #1E3932;
    text-decoration: none;
    transition: all 0.2s ease;
}

.nav-text {
    font-size: 16px;
    font-weight: 500;
}

.active .nav-text {
    font-weight: 600;
}
</style>