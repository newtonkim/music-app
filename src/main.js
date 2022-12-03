import { createApp } from "vue";
import { createPinia } from "pinia";

import store from "./stores";
import App from "./App.vue";
import router from "./router";
import VeeValidatePlugin from './includes/validation.js';

import "./assets/tailwind.css";
import "./assets/main.css";

// load firebase before vue to check if user is first authenticated
import { auth } from "./includes/firebase";

let app;

auth.onAuthStateChanged( () => {
    if (!app) {
        app = createApp(App);

        app.use(createPinia());
        app.use(router);
        app.use(store);
        app.use(VeeValidatePlugin);
        
        app.mount("#app");
    }

});


