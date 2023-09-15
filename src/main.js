import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import routes from './routes';
const app = createApp(App);
app.use(routes);
app.mount('#app');
