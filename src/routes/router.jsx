import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";

const router = createBrowserRouter ([
    {
        path: "/",
        Component: Home,
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