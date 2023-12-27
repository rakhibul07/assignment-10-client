import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import Products from "../components/products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import UpdateProduct from "../pages/UpdateProducts/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoutes>
            <AddProduct />
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRoutes>
            <UpdateProduct />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/products/:brand",
        element: <Products />,
        loader: () => fetch(`http://localhost:5000/products`),
      },
      {
        path: "/products/:brand/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails />
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoutes>
            <MyCart />
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/carts"),
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/logIn",
        element: <LogIn />,
      },
    ],
  },
]);
export default router;
