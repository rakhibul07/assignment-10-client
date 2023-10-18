import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: ([
            {
                path: "/",
                element: <Home />,
                loader: () =>fetch("./data.json")
            },
            {
                path: "/addProduct",
                element: <PrivateRoutes><AddProduct /></PrivateRoutes>
            },
            {
                path: "/myCart",
                element: <MyCart />
            },
            {
                path: "/signUp",
                element: <SignUp />
            },
            {
                path: "/logIn",
                element: <LogIn />
            },
        ])
    }
])
export default router;