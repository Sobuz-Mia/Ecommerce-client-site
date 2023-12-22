import Main from "../layout/Main";

const { createBrowserRouter } = require("react-router-dom");

export const route = createBrowserRouter([
    {
        path:'/',
        element:<Main/>
    }
])