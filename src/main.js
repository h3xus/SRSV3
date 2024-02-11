import { createApp } from "vue";
import "./style.css";
import i18n from "./i18n"
// theme
import 'primevue/resources/themes/lara-light-green/theme.css';
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Panel from "primevue/panel";
import Lara from "./presets/lara";
import Calendar from 'primevue/calendar';

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("./views/Home.vue") },
    { path: "/home", component: () => import("./views/Home.vue") },
    { path: "/about", component: () => import("./views/About.vue") },
    { path: "/cal", component: () => import("./views/Cal.vue") },
  ],
});


const app = createApp(App);
app.component("Panel", Panel);
app.component("Calendar", Calendar);
app.use(PrimeVue, { unstyled: false, pt: Lara });
app.use(router)

app.use(i18n)
app.mount("#app");
