import { createApp } from "vue";
import Dev from "./serve.vue";
import MenuComponents from "../src/main";

const app = createApp(Dev);
MenuComponents(app);

app.mount("#app");
