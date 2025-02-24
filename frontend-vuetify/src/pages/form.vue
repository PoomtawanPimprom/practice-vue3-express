<template>
    <v-container>
      <v-card class="mx-auto pa-4" max-width="500">
        <v-card-title class="text-h5 mb-4">
          แบบฟอร์มข้อมูล
        </v-card-title>
        
        <v-form ref="form" v-model="isValid">
          <v-text-field
            v-model="firstValue"
            label="ค่าที่ 1"
            :rules="valueRules"
            dense
            clearable
          ></v-text-field>
          
          <v-text-field
            v-model="secondValue"
            label="ค่าที่ 2"
            :rules="valueRules"
            outlined
            dense
            clearable
          ></v-text-field>
          
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="error"
              text
              @click="resetForm"
            >
              ล้างข้อมูล
            </v-btn>
            <v-btn
              color="primary"
              :disabled="!isValid"
              @click="submitForm"
            >
              บันทึก
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isValid: false,
        firstValue: '',
        secondValue: '',
        valueRules: [
          v => !!v || 'กรุณากรอกข้อมูล',
          v => (v && v.length >= 2) || 'ต้องมีอย่างน้อย 2 ตัวอักษร'
        ]
      }
    },
    methods: {
      submitForm() {
        if (this.$refs.form.validate()) {
          // ทำการประมวลผลข้อมูลที่กรอก
          console.log({
            firstValue: this.firstValue,
            secondValue: this.secondValue
          });
          
          // ตัวอย่างแสดง snackbar เมื่อบันทึกสำเร็จ
          this.$emit('form-submitted', {
            firstValue: this.firstValue,
            secondValue: this.secondValue
          });
        }
      },
      resetForm() {
        this.$refs.form.reset();
      }
    }
  }
  </script>