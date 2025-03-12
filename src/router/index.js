import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import OnlyProfit from "@/views/OnlyProfit.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/profit",
        name: "Profit",
        component: OnlyProfit,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
