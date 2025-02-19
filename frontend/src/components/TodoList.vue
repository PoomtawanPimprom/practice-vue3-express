<script setup >
import { ref } from 'vue'



const listOfTodos = ref([{ name: "homework", status: false }]);

const createTodo = (data) => {
    return
}

const onSubmit = () => {
    return
}

</script>

<template>
    <div class="container">
        <div class="bg-todo">
            

        </div>
    </div>
</template>

<style>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding: 2rem;
}

.bg-todo {
    padding: 2rem;
    background: burlywood;
}
</style>