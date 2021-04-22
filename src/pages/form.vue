<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <DataForm />
    </el-col>
    <el-col :span="16">
      <BarChart />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DataForm from "../components/DataForm.vue";
import BarChart from "../components/BarChart.vue";

export default defineComponent({
  name: "index",
  components: {
    BarChart,
    DataForm,
  },
});
</script>
