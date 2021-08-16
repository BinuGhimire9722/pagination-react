import AboutPage from "../pages/aboutPage";
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
    }
]

export default route;