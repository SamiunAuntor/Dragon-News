import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

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
        path: "auth",
        element: <h1>auth layout</h1>
    },
    {
        path: "news",
        element: <h1>news layout</h1>
    },
    {
        path: "/*",
        element: <h1>error 404 : not found</h1>
    }

])


export default router;