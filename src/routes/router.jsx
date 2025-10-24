import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                path: "",
                Component: Home,
                loader: () => fetch("/news.json").then(res => res.json())
            },
            {
                path: "/category/:id",
                Component: CategoryNews,
                loader: () => fetch("/news.json").then(res => res.json())
            }
        ]
    },
    {
        path: "about",
        element: <h1>auth layout</h1>
    },
    {
        path: "news",
        element: <h1>news layout</h1>
    },
    {
        path: "auth",
        Component: AuthLayout,
        children: [
            {
                path: "login",   // relative path
                Component: Login,
            },
            {
                path: "register",  // relative path
                Component: Register,
            }
        ]
    },
    {
        path: "/news-details/:id",
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: () => fetch("/news.json").then(res => res.json())
    },
    {
        path: "/*",
        element: <h1>error 404 : not found</h1>
    }


])


export default router;