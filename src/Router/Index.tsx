import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Founder from "../pages/Founder";
import ChallengePartnerPage from "../pages/ChallengePartner";
import ChannelMarketingSolution from "../pages/ChannelMarketingSolution";
import EmployeeEngagementSolution from "../pages/EmployeeEngagementSolution";
import RewardFullfillSolution from "../pages/RewardFullfillSolution";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/founder",
        element: <Founder />
    },
    {
        path: "/challenge-partner",
        element: <ChallengePartnerPage />
    },
    {
        path: "/challenge-marketing-solution",
        element: <ChannelMarketingSolution />
    },
    {
        path: "/employee-marketing-solution",
        element: <EmployeeEngagementSolution />
    },
    {
        path: "/reward-fullfill-solution",
        element: <RewardFullfillSolution />
    }
])

export default routers;