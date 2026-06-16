import Sidebar from "../components/dashboard/Sidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import OverviewSection from "../components/dashboard/OverviewSection";
import AnalyticsSection from "../components/dashboard/AnalyticsSection";
import BottomSection from "../components/dashboard/BottomSection";
import RatingChart from "../components/dashboard/RatingChart";
import ContestPerformanceChart from "../components/dashboard/ContestPerformanceChart";
import "./Dashboard.css";
import { useState } from "react";
import API from "../services/api";

function Dashboard() {
    const [handle, setHandle] = useState("");
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [ratingHistory, setRatingHistory] = useState([]);
    const [contestHistory, setContestHistory] = useState([]);
    const [weakTopics, setWeakTopics] = useState([]);
    const [strongTopics, setStrongTopics] = useState([]);
    const [recommendations, setRecommendations] = useState([]); 
        const fetchProfile = async () => {
            try {

                setLoading(true);
                setError("");
                const profileresponse =
                    await API.get(`/profile/${handle}`);
                const ratingResponse =
                    await API.get(`/rating-history/${handle}`);
                const contestResponse =
                    await API.get(`/contest/${handle}`);    
                const weakResponse =
                    await API.get(`/weak-topic/${handle}`);
                const strongResponse =
                    await API.get(`/strong-topic/${handle}`);
                const recommendationResponse =
                    await API.get(`/recommendation/${handle}`);    
                if (profileresponse.data.result) {
                    setProfile(
                        profileresponse.data.result[0]
                    );
                } 
                else {
                    setProfile(
                        profileresponse.data
                    );
                }
                setRatingHistory(
                    ratingResponse.data
                );
                setContestHistory(
                    contestResponse.data
                );
                setWeakTopics(
                    weakResponse.data
                );
                setStrongTopics(
                    strongResponse.data
                );
                setRecommendations(
                    recommendationResponse.data
                );

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
                                    ratingHistory={ratingHistory}
                                    contestHistory={contestHistory}
                                />
                                <BottomSection
                                    weakTopics={weakTopics}
                                    strongTopics={strongTopics}
                                    recommendations={recommendations}
                                />
                            </main>
                        </div>
                    )}
                </>
            );
        }        
export default Dashboard;