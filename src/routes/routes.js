import AboutPage from "../pages/aboutPage";
import CartPage from "../pages/cartPage";
import HomePage from "../pages/homePage";
import ProductPage from "../pages/productsPage";

const route = [
    {
        name: "Home",
        path: "/",
        component: HomePage,
    },

    {
        name: "Photos",
        path: "/photos",
        component: AboutPage,
    },
    {
        name : "Products",
        path :"/products",
        component : ProductPage
    },
    {
        name : "Cart",
        path :"/cart",
        component : CartPage,
    }
]

export default route;