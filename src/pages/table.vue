<template>
  <el-row :gutter="20">
    <el-col :xs="24" :md="12">
      <BarChart />
    </el-col>
    <el-col :xs="24" :md="12">
      <DataTable />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarChart from "../components/BarChart.vue";
import DataTable from "../components/DataTable.vue";

export default defineComponent({
  name: "table",
  components: {
    BarChart,
    DataTable,
  },
});
</script>
