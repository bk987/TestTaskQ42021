import { createStore } from "vuex";
import auth from "./modules/auth";
import shop from "./modules/shop";
import cart from "./modules/cart";

const store = createStore({
    modules: {
        auth,
        shop,
        cart,
    },
});

export default store;
