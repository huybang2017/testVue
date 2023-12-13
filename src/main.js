import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
// Tạo ứng dụng và sử dụng router
const app = createApp(App);
// Tạo router

app.use(router);

// Mount ứng dụng vào phần tử có id là "app"
app.mount("#app");
