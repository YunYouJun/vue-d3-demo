<template>
  <a style="margin: 1rem" :href="pkg.repository.url" target="_blank">
    GitHub
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import pkg from "../../package.json";

export default defineComponent({
  data() {
    return {
      pkg,
    };
  },
});
</script>
