import Sidebar from "../components/dashboard/Sidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import OverviewSection from "../components/dashboard/OverviewSection";
import AnalyticsSection from "../components/dashboard/AnalyticsSection";
import BottomSection from "../components/dashboard/BottomSection";
import "./Dashboard.css";
function Dashboard() {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <main className="dashboard-main">
                <DashboardHeader
                    handle={handle}
                    setHandle={setHandle}
                    fetchProfile={fetchProfile}
                    loading={loading}
                />
                <OverviewSection />
                <AnalyticsSection />
                <BottomSection />
            </main>
        </div>
    );
}



export default Dashboard;