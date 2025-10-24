import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        loader: () => fetch("/news.json").then(res => res.json()),
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
        Component: ErrorPage,
    },
    {
        path: "auth",
        Component: AuthLayout,
        children: [
            {
                path: "login",
                Component: Login,
            },
            {
                path: "register",
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
        Component: ErrorPage,
    }


])


export default router;