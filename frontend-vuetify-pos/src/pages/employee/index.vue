<template>
    <v-container class="container" fluid>
        <Sidebar />
        <v-container class="container-card">
            <v-card class="container-card">
                <v-card-title primary-title>
                    <v-row>
                        <v-col cols="12">รายชื่อพนักงาน</v-col>
                        <v-col cols="12" class="d-flex justify-end">
                            <v-btn small elevation="" color="green">เพิ่มพนักงาน</v-btn>
                        </v-col>
                    </v-row>
                </v-card-title>
                <v-card-text class="container-card">
                    <v-table class="container-card">
                        <thead>
                            <tr>
                                <th>รหัสพนักงาน</th>
                                <th>ชื่อ</th>
                                <th>นามสกุล</th>
                                <th>ตำแหน่ง</th>
                                <th>จัดการ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in this.employee" :key="index">
                                <td>{{ item.id }}</td>
                                <td>{{ item.fname }}</td>
                                <td>{{ item.lname }}</td>
                                <td>{{ item.roleName }}</td>
                                <td>
                                    <v-row  class="d-flex" style="gap: 10px;">
                                            <v-btn small elevation="" color="red">ลบ</v-btn>
                                            <v-btn small elevation="" color="yellow">แก้ไข</v-btn>
                                    </v-row>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card-text>
            </v-card>
        </v-container>
    </v-container>
</template>

<script>
import { getAllEmployees } from "@/api/user";
import Sidebar from "@/components/sidebar.vue";

export default {
    data() {
        return {
            employee: [],
        };
    },
    methods: {
        async getEmployee() {
            const res = await getAllEmployees();
            this.employee = res;
        },
    },
    mounted() {
        this.getEmployee();
    },
    components: {
        Sidebar,
    },
};
</script>

<style scoped>
.container {
    display: flex;
    height: 100vh;
    min-height: 100vh;
    padding: 0px 0px 0px 0px;
    margin: 0px;
}

.container-card {
    width: 100%;
    height: 100%;
}
</style>
