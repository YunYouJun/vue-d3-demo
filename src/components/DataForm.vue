<template>
  <h2>咱是表单</h2>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="字母">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="频率">
      <el-input-number
        v-model="form.value"
        :precision="2"
        :step="0.01"
        :max="1"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      form: {
        name: "",
        value: 0,
      },
    };
  },

  methods: {
    onSubmit() {
      this.$store.commit("form/addItem", this.form);
      console.log(this.$store.state.form.chartData);
    },
  },
});
</script>
