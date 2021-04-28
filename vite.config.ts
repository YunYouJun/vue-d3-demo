import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import * as pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${pkg.name}/`,
  plugins: [Vue(), Pages()],
});
