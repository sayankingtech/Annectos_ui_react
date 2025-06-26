import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Founder from "../pages/Founder";
import ChallengePartnerPage from "../pages/ChallengePartner";
import ChannelMarketingSolution from "../pages/ChannelMarketingSolution";
import EmployeeEngagementSolution from "../pages/EmployeeEngagementSolution";
import RewardFullfillSolution from "../pages/RewardFullfillSolution";
import Newsletter from "../pages/Newsletter";
import Career from "../pages/Career";
import PrivacyPolicy from "../pages/PrivacyPolicy";

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
    },
    {
        path: "/newsletter",
        element: <Newsletter />
    },
    {
        path: "/career",
        element: <Career />
    },
    {
        path: "/privacy-policy",
        element: <PrivacyPolicy />
    }
])

export default routers;