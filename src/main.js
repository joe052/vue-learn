import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "./assets/styles/tailwind.css";
// import "./style.css";
const app = createApp(App);
app.use(router);
app.mount("#app");
