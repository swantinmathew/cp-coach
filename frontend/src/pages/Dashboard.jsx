import Sidebar from "../components/dashboard/Sidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import OverviewSection from "../components/dashboard/OverviewSection";
import AnalyticsSection from "../components/dashboard/AnalyticsSection";
import BottomSection from "../components/dashboard/BottomSection";
import "./Dashboard.css";
import { useState } from "react";
import API from "../services/api";

function Dashboard() {
    const [handle, setHandle] = useState("");
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
        const fetchProfile = async () => {
            try {

                setLoading(true);
                const response =
                    await API.get(`/profile/${handle}`);
                if (response.data.result) {
                    setProfile(
                        response.data.result[0]
                    );
                } else {
                    setProfile(
                        response.data
                    );
                }

            } catch (error) {
                console.log(error);
                setError("Failed to fetch profile");

            } finally {
                setLoading(false);
            }

            };    

            return (
                <>
                    {!profile ? (
                        <div className="welcome-screen">
                            <h1>CP Coach Dashboard</h1>
                            <p>
                                Enter your Codeforces handle to
                                generate your personalized dashboard.
                            </p>
                            <div className="welcome-search">
                                <input
                                    type="text"
                                    placeholder="Enter Codeforces Handle"
                                    value={handle}
                                    onChange={(e) =>
                                        setHandle(e.target.value)
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            fetchProfile();
                                        }
                                    }}
                                />
                                <button
                                    onClick={fetchProfile}
                                    disabled={loading || !handle.trim()}
                                >
                                    {loading
                                        ? "Analyzing..."
                                        : "Analyze Profile"}
                                </button>
                            </div>
                            {error && (
                                <p>{error}</p>
                            )}
                        </div>
                    ) : (
                        <div className="dashboard-layout">
                            <Sidebar />
                            <main className="dashboard-main">
                                <DashboardHeader
                                    handle={handle}
                                    setHandle={setHandle}
                                    fetchProfile={fetchProfile}
                                    loading={loading}
                                />
                                <OverviewSection
                                    profile={profile}
                                />
                                <AnalyticsSection
                                    profile={profile}
                                />
                                <BottomSection
                                    profile={profile}
                                />
                            </main>
                        </div>
                    )}
                </>
            );
        }        
export default Dashboard;