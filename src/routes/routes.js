import AboutPage from "../pages/aboutPage";
import HomePage from "../pages/homePage";

const route = [
    {
        name: "Home",
        path: "/",
        component: HomePage,
    },

    {
        name: "About",
        path: "/about",
        component: AboutPage,
    }
]

export default route;