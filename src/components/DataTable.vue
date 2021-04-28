<template>
  <h2>咱是表格</h2>
  <el-table :data="tableData" style="width: 50%; margin: auto">
    <el-table-column prop="letter" label="字母"></el-table-column>
    <el-table-column prop="frequency" label="频率" sortable></el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { alphabetData } from "../types/data";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      tableData: [] as alphabetData[],
    };
  },
  mounted() {
    axios.get("./alphabet.json").then((res) => {
      this.tableData = res.data as alphabetData[];
    });
  },
});
</script>
