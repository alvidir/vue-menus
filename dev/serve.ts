import { createApp } from "vue";
import App from "./App.vue";
import include from "../src/main";

const app = createApp(App);
include(app);

app.mount("#app");
