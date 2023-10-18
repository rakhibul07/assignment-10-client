import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: ([
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/addProduct",
                element: <AddProduct />
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