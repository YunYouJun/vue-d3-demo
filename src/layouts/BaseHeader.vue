<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    @select="handleSelect"
    router
  >
    <el-menu-item v-for="(item, i) in navItems" :key="i" :index="item.index">{{
      item.name
    }}</el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "index",
  data() {
    return {
      activeIndex: "1",
      navItems: [
        {
          name: "🏠",
          index: "/",
        },
        {
          name: "直方图",
          index: "/bar",
        },
        {
          name: "表格",
          index: "/table",
        },
        {
          name: "表单",
          index: "/form",
        },
      ],
    };
  },
  methods: {
    handleSelect(key: string, keyPath: string) {
      console.log(key, keyPath);
    },
  },
});
</script>
