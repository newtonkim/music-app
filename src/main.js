import { createApp } from "vue";
import { createPinia } from "pinia";

import store from "./stores";
import App from "./App.vue";
import router from "./router";

import "./assets/tailwind.css";
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(store);

app.mount("#app");
