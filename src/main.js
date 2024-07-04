import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueGoogleMaps from "@fawmi/vue-google-maps";

const app = createApp(App);
app.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBklUCKklfaL71JrXNMEr79FGUS1aRzjdY",
  },
});

app.use(createPinia());
app.use(router);

app.mount("#app");
