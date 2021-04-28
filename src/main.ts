import { createApp } from "vue";
import App from "./App.vue";
// import scss
import "./index.scss";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
// import "element-plus/lib/theme-chalk/index.css";
import "element-theme-ink";

const app = createApp(App);
app.use(ElementPlus).use(router).use(store);
app.mount("#app");
