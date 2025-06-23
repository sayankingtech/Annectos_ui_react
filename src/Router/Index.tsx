import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Founder from "../pages/Founder";

const routers = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/founder",
        element: <Founder/>
    }
])

export default routers;