<template>
  <BarChart />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarChart from "./components/BarChart.vue";

export default defineComponent({
  name: "App",
  components: {
    BarChart,
  },
});
</script>
