import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Founder from "../pages/Founder";
import ChallengePartner from "../pages/ChallengePartner";

const routers = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/founder",
        element: <Founder/>
    },
    {
        path:"/challenge-partner",
        element: <ChallengePartner/>
    }
])

export default routers;