import NotFound from "@/components/NotFound";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import(/* webpackChunkName: "home" */ "@/pages/Home"),
    },
    {
        path: "/cart",
        name: "cart",
        component: () => import(/* webpackChunkName: "cart" */ "@/pages/Cart"),
    },
    {
        path: "/success",
        name: "success",
        component: () => import(/* webpackChunkName: "success" */ "@/pages/Success"),
    },
    {
        path: "/orders",
        name: "orders",
        component: () => import(/* webpackChunkName: "orders" */ "@/pages/Orders"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFound,
    },
];

export default routes;
