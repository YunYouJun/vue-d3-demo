import path from 'path'
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import * as pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  base: `/${pkg.name}/`,
  plugins: [Vue(), Pages()],
});
