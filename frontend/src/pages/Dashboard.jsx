import Sidebar from "../components/dashboard/Sidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import OverviewSection from "../components/dashboard/OverviewSection";
import AnalyticsSection from "../components/dashboard/AnalyticsSection";
import BottomSection from "../components/dashboard/BottomSection";

function Dashboard() {
    return (
        <div className="dashboard-layout">

            <Sidebar />

            <main className="dashboard-main">

                <DashboardHeader />

                <OverviewSection />

                <AnalyticsSection />

                <BottomSection />

            </main>

        </div>
    );
}

export default Dashboard;