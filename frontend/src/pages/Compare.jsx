import "./Compare.css"
import API from "../services/api";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function Compare() {

    const location = useLocation();
    const currentProfile = location.state?.currentProfile;
    const directHandle = location.state?.directHandle;
    const [compareHandle, setCompareHandle] = useState("");
    const [compareProfile, setCompareProfile] = useState(null)
    const [comparisonData, setComparisonData] = useState(null);
    const [aiSummary, setAiSummary] = useState(null);
    const [aiLoading, setAiLoading] = useState(false);
    const [loading, setLoading] = useState(false);

    const compareProfiles = async () => {

        try {

            setLoading(true);

            const response =
                await API.get(
                    `/profile/${compareHandle}`
                );
            console.log(response.data.result[0]);
            setCompareProfile(
                response.data.result[0]
            );
            await generateAIComparison();

        } catch(error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    const generateAIComparison = async () => {

        try {

            setAiLoading(true);

            const response = await API.post(
                "/compare-ai",
                {
                    currentHandle: currentProfile.handle,
                    compareHandle: compareHandle
                }
            );

            setComparisonData(response.data.comparison);

            setAiSummary(response.data.aiSummary);

        } catch (error) {

            console.log(error);

        } finally {

            setAiLoading(false);

        }

    };

    useEffect(() => {

        if (directHandle) {

            setCompareHandle(
                directHandle
            );

        }

    }, [directHandle]);

    useEffect(() => {

        if (
            directHandle &&
            compareHandle
        ) {

            compareProfiles();

        }

    }, [compareHandle]);

    const getRankClass = (rank) => {

        const r = rank?.toLowerCase() || "";

        if (r.includes("legendary")) return "legendary";
        if (r.includes("grandmaster")) return "grandmaster";
        if (r.includes("master")) return "master";
        if (r.includes("candidate")) return "candidate-master";
        if (r.includes("expert")) return "expert";
        if (r.includes("specialist")) return "specialist";
        if (r.includes("pupil")) return "pupil";

        return "newbie";
    };
    return (

        <div className="compare-page">

            <div className="compare-hero">

                <h1>
                    ⚔️ Compare Profiles
                </h1>

                <p>
                    Compare your Codeforces performance
                    against any competitive programmer
                    and discover where you stand.
                </p>

                <div className="compare-search">

                    <input
                        placeholder="Enter Handle To Compare"
                        value={compareHandle}
                        onChange={(e) =>
                            setCompareHandle(
                                e.target.value
                            )
                        }
                    />

                    <button
                        onClick={compareProfiles}
                    >
                        {loading
                            ? "Comparing..."
                            : "Compare"}
                    </button>

                </div>

            </div>
            
            {compareProfile && currentProfile && (
                
            <div className="compare-content">

                {/* ---------------- Summary ---------------- */}

                <section className="summary-section">

                    <h2>

                        Comparison Summary

                    </h2>

                    <div className="summary-table">

                        <div className="summary-row">

                            <span>Current Rating</span>

                            <strong>{currentProfile.rating}</strong>

                            <strong>{compareProfile.rating}</strong>

                        </div>

                        <div className="summary-row">

                            <span>Max Rating</span>

                            <strong>{currentProfile.maxRating}</strong>

                            <strong>{compareProfile.maxRating}</strong>

                        </div>

                        <div className="summary-row">

                            <span>Rank</span>

                            <strong>{currentProfile.rank}</strong>

                            <strong>{compareProfile.rank}</strong>

                        </div>

                        <div className="summary-row">

                            <span>Contribution</span>

                            <strong>{currentProfile.contribution}</strong>

                            <strong>{compareProfile.contribution}</strong>

                        </div>

                    </div>

                </section>

                {/* ---------------- Rating Chart ---------------- */}

                <section className="chart-section">

                    <h2>

                        Rating History Comparison

                    </h2>

                    <div className="chart-placeholder">

                        Rating Graph will be here

                    </div>

                </section>

                {/* ---------------- Topic Radar ---------------- */}

                <section className="topic-section">

                    <h2>

                        Topic Strength Radar

                    </h2>

                    <div className="chart-placeholder">

                        Radar Chart

                    </div>

                </section>

                {/* ---------------- Breakdown ---------------- */}

                <section className="breakdown-section">

                    <h2>

                        Problem Solving Breakdown

                    </h2>

                    <div className="chart-placeholder">

                        Progress Bars

                    </div>

                </section>

                {/* ---------------- Recent ---------------- */}

                <section className="recent-section">

                    <h2>

                        Recent Performance

                    </h2>

                    <div className="recent-grid">

                        <div>

                            <h3>{currentProfile.handle}</h3>

                            <p>Contest History</p>

                        </div>

                        <div>

                            <h3>{compareProfile.handle}</h3>

                            <p>Contest History</p>

                        </div>

                    </div>

                </section>

                {/* ---------------- AI ---------------- */}

                <section className="ai-section">

                    <h2>🤖 AI Comparison Summary</h2>

                    <div className="ai-box">

                        {aiLoading ? (

                            <div className="ai-loading">

                                🤖 Generating AI Analysis...

                            </div>

                        ) : aiSummary && (

                            <>

                                <div className="ai-summary">

                                    {aiSummary.summary}

                                </div>

                                <h3>💪 Strengths</h3>

                                <ul>

                                    {aiSummary.strengths.map((item,index)=>(

                                        <li key={index}>{item}</li>

                                    ))}

                                </ul>

                                <h3>⚠ Weaknesses</h3>

                                <ul>

                                    {aiSummary.weaknesses.map((item,index)=>(

                                        <li key={index}>{item}</li>

                                    ))}

                                </ul>

                                <h3>🎯 Recommendation</h3>

                                <p>

                                    {aiSummary.recommendation}

                                </p>

                                <h3>📚 Study Plan</h3>

                                <ul>

                                    {aiSummary.studyPlan.map((item,index)=>(

                                        <li key={index}>{item}</li>

                                    ))}

                                </ul>

                            </>

                        )}

                    </div>

                </section>

            </div>
        )}
        </div>

    );

};


export default Compare;