import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Founder from "../pages/Founder";
import ChallengePartnerPage from "../pages/ChallengePartner";
import ChannelMarketingSolution from "../pages/ChannelMarketingSolution";

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
        element: <ChallengePartnerPage/>
    },
    {
        path:"/challenge-marketing-solution",
        element: <ChannelMarketingSolution/>
    }
])

export default routers;