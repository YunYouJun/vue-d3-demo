<template>
  <el-container>
    <base-header />
    <el-main>
      <router-view />
    </el-main>
    <el-footer>
      <base-footer />
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseFooter from "./layouts/BaseFooter.vue";
import BaseHeader from "./layouts/BaseHeader.vue";

export default defineComponent({
  components: { BaseHeader, BaseFooter },
});
</script>
