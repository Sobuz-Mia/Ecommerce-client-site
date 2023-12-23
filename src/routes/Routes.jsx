import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ProductDetail from "../pages/ProductDetails/ProductDetail";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

 const route = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/sign-up',
                element:<SignUp/>
            },
            {
                path:'/product/:id',
                element:<ProductDetail/>
            }
        ]
    }
])

export default route;