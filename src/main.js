import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/of.css";
import "@/assets/js/of.js";
//import "@/assets/js/of-icons.js";

createApp(App).use(store).use(router).mount("#app");
