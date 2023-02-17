import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "./index.css";
// import "./style.css";
// import "./assets/tailwind.css";
const app = createApp(App);
app.use(router);
app.mount("#app");
