<script setup>
import { ref, reactive} from "vue"
import ShowValue from './showValue.vue'
const formdata = reactive({
    firstname: "-",
    lastname: "-",
    gender: "-",
})
const genderlist = ["ชาย","หญิง","ไม่ระบุ"]
const onSubmit = () =>{
    console.log(formdata)
}
</script>

<template>
    <div class="container-RegisterForm">
      <p>register Form</p>
      <div class="input-fuild">
        <label for="firstname">ชื่อ</label>
        <input id="firstname" name="firstname" class="input" type="text" v-model="formdata.firstname">
      </div>
      <div class="input-fuild">
        <label for="lastname">นามสกุล</label>
        <input id="lastname" name="lastname" type="text" class="input" v-model="formdata.lastname">
      </div>
      <div class="input-fuild" v-for="(gender, index) in genderlist" :key="index">
        <div>
          <input type="radio" name="gender" :value="gender" v-model="formdata.gender">
          <label :for="gender">{{ gender }}</label>
        </div>
      </div>
      <button @click="onSubmit">ส่ง</button>
  
      <!-- Debugging -->
      <p>Debug: {{ formdata }}</p>
      <div>
          <ShowValue :formdata="formdata"/>

      </div>
    </div>
  </template>

<style>
.input{
    width: 20%;
}

.container-RegisterForm {
    display: flex;
    flex-direction: column;
    padding: 2rem;
}

.input-fuild {
    display: flex;
    flex-direction: column;
}
</style>