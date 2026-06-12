import { useState, useEffect } from "react";
import API from "../services/api";
import { FaTrophy } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { MdOutlineWarningAmber } from "react-icons/md";
import { GiBiceps } from "react-icons/gi";
import { BsLightbulb } from "react-icons/bs";
import {LineChart,Line,XAxis,YAxis, Tooltip,ResponsiveContainer,CartesianGrid} from "recharts";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./Dashboard.css";

function Dashboard() {
    const [loading,setLoading] = useState(false);
    const [handle, setHandle] = useState("");
    const [profile, setProfile] = useState(null);
    const [placementScore, setPlacementScore] = useState(null);

    const [weakTopics, setWeakTopics] = useState([]);
    const [strongTopics, setStrongTopics] = useState([]);

    const [recommendations, setRecommendations] = useState([]);
    const [weakestTopic, setWeakestTopic] = useState("");
    const [error, setError] = useState("");
    const [ratingHistory,setRatingHistory] = useState([]);
    useEffect(() => {
        const savedHandle =
            localStorage.getItem(
                "lastHandle"
            );
        if(savedHandle){

            setHandle(
                savedHandle
            );
        }
    }, []);

    const fetchProfile = async () => {

        try {
            setError("");
            setLoading(true);
            const [
                    profileResponse,
                    scoreResponse,
                    weakTopicResponse,
                    strongTopicResponse,
                    recommendationResponse,
                    ratingResponse
                ] = await Promise.all([

                    API.get(`/profile/${handle}`),
                    API.get(`/placement-score/${handle}`),
                    API.get(`/weak-topic/${handle}`),
                    API.get(`/strong-topic/${handle}`),
                    API.get(`/recommendation/${handle}`),
                    API.get(`/rating-history/${handle}`)                   
                ]);            

            if (profileResponse.data.result) {

                setProfile(
                    profileResponse.data.result[0]
                );

            } else {

                setProfile(
                    profileResponse.data
                );

            }

        setPlacementScore(
            scoreResponse.data
        );

        setWeakTopics(
            weakTopicResponse.data.weakTopics
        );

        setStrongTopics(
            strongTopicResponse.data.strongTopics
        );

        setWeakestTopic(
            recommendationResponse.data.weakestTopic
        );

        setRecommendations(
            recommendationResponse.data.recommendations
        );    

        localStorage.setItem(
            "lastHandle",
            handle
        );
        setRatingHistory(

            ratingResponse.data
                .slice(-20)
                .map(contest => ({

                    ...contest,

                    date:
                        new Date(
                            contest.ratingUpdateTimeSeconds * 1000
                        ).toLocaleDateString()

                }))
            );
    }

        catch (error) {

            console.log(error);
            setProfile(null);
            setPlacementScore(null);
            setWeakTopics([]);
            setStrongTopics([]);
            setRecommendations([]);
            if(error.response?.status === 500)
                setError(
                    "Codeforces handle not found"
            );
            else{
                setError(
                    "Failed to fetch data. Please try again"
                );
            }

        }
        finally{
            setLoading(false)
        }

    };
    const ratingChanges = ratingHistory.map(
    contest => contest.newRating - contest.oldRating
    );

    const bestGain =
        ratingChanges.length > 0
            ? Math.max(...ratingChanges)
            : 0;

    const worstLoss =
        ratingChanges.length > 0
            ? Math.min(...ratingChanges)
            : 0;

    const averageChange =
        ratingChanges.length > 0
            ? Math.round(
                ratingChanges.reduce(
                    (sum, value) => sum + value,
                    0
                ) / ratingChanges.length
            )
            : 0;
            const strongestTopic =
            strongTopics.length > 0
                ? strongTopics[0].topic
                : "N/A";

        const weakTopic =
            weakTopics.length > 0
                ? weakTopics[0].topic
                : "N/A";

        const trend =
            ratingHistory.length >= 5
                ? ratingHistory[ratingHistory.length - 1].newRating >
                ratingHistory[ratingHistory.length - 5].newRating
                    ? "Improving"
                    : "Declining"
                : "Not Enough Data";        
    return (

        <div className="dashboard">

            {/* HEADER */}

            <div className="dashboard-header">

                <h1 className="dashboard-title">
                    CP Coach Dashboard
                </h1>

                <p className="dashboard-subtitle">
                    Analyze your Codeforces profile and
                    discover your weak topics.
                </p>

            </div>

            {/* SEARCH */}

            <div className="search-box">

                <input
                    type="text"
                    placeholder="Enter Codeforces Handle"
                    value={handle}
                    onChange={(e) =>
                        setHandle(
                            e.target.value
                        )
                    }
                    onKeyDown={(e) => {
                        if(e.key==="Enter"){
                            fetchProfile();
                        }
                    }

                    }
                />

                <button
                    onClick={fetchProfile}
                    disabled={loading || !handle.trim()}
                >
                    {loading ? "Analyzing..." : "Analyze"}
                </button>
                </div>
                {
                    error &&(
                        <div className="error-card">
                            <strong>
                                Error
                            </strong>
                            <p>
                                {error}
                            </p>
                        </div>
                    )
                }
                {
                    !profile &&
                    !loading &&
                    !error &&(
                        <div className="empty-state">
                            <FiTarget
                                className="empty-icon"
                            />
                            <h2>
                                Start Your Analysis
                            </h2>
                            <p>
                                Enter a Codeforces handle
                                to view profile stats,
                                placement score and
                                recommendations 
                            </p>
                        </div>
                    )
                }

            {/* SUMMARY SECTION */}

            <div className="summary-grid">

                {
                    loading ? (
                        <>
                            <div className="skeleton-card"></div>
                            <div className="skeleton-card"></div>
                            <div className="skeleton-card"></div>
                            <div className="skeleton-card"></div>
                        </>
                    ) : (
                        profile && (
                            <>
                                <div className="summary-card">
                                    <FaTrophy className="summary-icon"/>
                                    <p>Contest Rating</p>
                                    <h2>{profile.rating||"N/A"}</h2>
                                    <span>
                                        Max: {profile.maxRating||"N/A"}
                                    </span>
                                </div>

                                <div className="summary-card">
                                    <FaGlobe className="summary-icon"/>
                                    <p>Global Rank</p>
                                    <h2>{profile.rank || "N/A"}</h2>
                                </div>

                                <div className="summary-card">
                                    <FaFlag className="summary-icon"/>
                                    <p>Country</p>
                                    <h2>{profile.country || "N/A"}</h2>
                                </div>

                                <div className="summary-card">
                                    <FaStar className="summary-icon"/>
                                    <p>Contribution</p>
                                    <h2>{profile.contribution||"N/A"}</h2>
                                </div>
                            </>
                        )
                    )
                }

            </div>
            {/* TOP GRID */}

            <div className="stats-grid">
            {
                loading ? (
                    <div className="card skeleton-large-card skeleton-profile"></div>
                ):(

                    profile && (

                        <div className="card profile-card">
                            <h2 className="card-title">
                                <FaUser></FaUser>
                                Profile Overview
                            </h2>
                            <div className="profile-header">
                                <img
                                    src={profile.titlePhoto}
                                    alt={profile.handle}
                                    className="profile-avatar" 
                                />
                                <div>
                                    <h3 className="profile-handle">
                                        {profile.handle}
                                    </h3>
                                    <p className="profile-rank">
                                        {profile.rank}
                                    </p>
                                </div>    
                            </div>
                            <div className="profile-row">
                                <span>Rating</span>

                                <strong className="rating-value">
                                    {profile.rating}
                                </strong>
                            </div>

                            <div className="profile-row">
                                <span>Max Rating</span>
                                <strong>
                                    {profile.maxRating}
                                </strong>
                            </div>
                            <div className="profile-row">
                                <span>Country</span>
                                <strong>
                                    {profile.country}
                                </strong>
                            </div>

                        </div>
                    )
                    )
                }
                {
                    loading ? (
                        <div className="card skeleton-large-card skeleton-placement"></div>
                    ):(    
                        placementScore && (

                            <div className="card placement-card">

                                <h2 className="card-title">
                                    <FiTarget/>
                                    Placement Score
                                </h2>
                                <div className="score-layout">

                                    <div className="score-left">

                                        <div
                                            className="score-circle"
                                            style={{
                                                background: `conic-gradient(
                                                    #4dd0e1 0deg,
                                                    #4dd0e1 ${placementScore.score * 3.6}deg,
                                                    #222 ${placementScore.score * 3.6}deg,
                                                    #222 360deg
                                                )`
                                            }}
                                        >
                                            <div className="score-inner">
                                                <div>
                                                    <div className="score-value">
                                                        {placementScore.score}
                                                    </div>
                                                    <div className="score-max">
                                                        /100
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="score-badge">
                                            <FaStar/> 
                                            {placementScore.level}
                                        </div>
                                    </div>
                                    <div className="score-details">
                                        <div className="metric-card">
                                            <div className="metric-left">
                                                <FaTrophy/>
                                                <span>Contests</span>
                                            </div>    
                                                <strong>{placementScore.contests}</strong>
                                        </div>
                                        <div className="metric-card">
                                            <div className="metric-left">
                                                <FaBook/>
                                                <span>Problems Solved</span>
                                            </div>    
                                                <strong>{placementScore.problemsSolved}</strong>  
                                        </div>
                                            
                                        <div className="metric-card">
                                            <div className="metric-left">
                                                <FaBullseye/>
                                                <span>Topic Coverage</span>
                                            </div>    
                                                <strong>{placementScore.topicCoverage}</strong>
                                            
                                        </div>
                                            
                                    </div>
                                </div>               
                            </div>
                        )
                        )
                    }
            </div>
                {
                ratingHistory.length > 0 && (

                    <div className="card">

                        <h2 className="card-title">

                            Rating Progress

                        </h2>
                        <p className="chart-subtitle">
                            Last 20 contests
                        </p>
                        <div className="chart-stats">

                            <div>
                                <span>Current: </span>
                                <strong>{profile.rating}</strong>
                            </div>

                            <div>
                                <span>Peak: </span>
                                <strong>{profile.maxRating}</strong>
                            </div>

                            <div>
                                <span>Contests: </span>
                                <strong>{ratingHistory.length}</strong>
                            </div>

                        </div>

                        <div
                            style={{
                                width:"100%",
                                height:300
                            }}
                        >

                            <ResponsiveContainer>

                                <LineChart
                                    data={
                                        ratingHistory}
                                        margin={{
                                        top: 10,
                                        right: 30,
                                        left: 20,
                                        bottom: 10
                                    }}
                                >

                                    <XAxis
                                        dataKey=
                                        "date"
                                        minTickGap={60}
                                        tick={{fontSize: 12 }}
                                    />

                                    <YAxis
                                        domain={[
                                            'dataMin - 100',
                                            'dataMax + 100'
                                        ]}
                                    />

                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#111",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            borderRadius: "12px",
                                            color: "#fff"
                                        }}
                                        labelStyle={{
                                            color: "#aaa"
                                        }}
                                        formatter={(value) => [value, "Rating"]}
                                        labelFormatter={(label) =>
                                            `Date: ${label}`
                                        }
                                    />

                                <Line
                                    type="monotone"
                                    dataKey="newRating"
                                    stroke="#4dd0e1"
                                    strokeWidth={3}
                                    dot={false}
                                    activeDot={{
                                        r:6
                                    }}
                                />
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    opacity={0.1}
                                />
                                </LineChart>

                            </ResponsiveContainer>

                        </div>

                    </div>

                )
            }
                        {
                            ratingHistory.length > 0 && (

                                <div className="card contest-performance-card">

                                    <h2 className="card-title">
                                        Contest Performance
                                    </h2>

                                    <div className="performance-grid">

                                        <div className="performance-item">
                                            <span>Best Gain</span>
                                            <strong className="positive">
                                                +{bestGain}
                                            </strong>
                                        </div>

                                        <div className="performance-item">
                                            <span>Worst Loss</span>
                                            <strong className="negative">
                                                {worstLoss}
                                            </strong>
                                        </div>

                                        <div className="performance-item">
                                            <span>Average Change</span>
                                            <strong
                                                className={
                                                    averageChange>=0
                                                        ? "positive"
                                                        : "negative"
                                                } 
                                            >
                                                {averageChange > 0 ? "+" : ""}
                                                {averageChange}
                                            </strong>
                                        </div>

                                        <div className="performance-item">
                                            <span>Total Contests</span>
                                            <strong>
                                                {ratingHistory.length}
                                            </strong>
                                        </div>

                                    </div>

                                </div>

                            )
                        }
                        {
                profile && (

                    <div className="card insights-card">

                        <h2 className="card-title">
                            Insights
                        </h2>

                        <div className="insight-item">
                            💪 Strongest Topic:
                            <strong>
                                {" "}
                                {strongestTopic}
                            </strong>
                        </div>

                        <div className="insight-item">
                            ⚠️ Weakest Topic:
                            <strong>
                                {" "}
                                {weakTopic}
                            </strong>
                        </div>

                        <div className="insight-item">
                            📈 Rating Trend:
                            <strong>
                                {" "}
                                {trend}
                            </strong>
                        </div>

                        <div className="insight-item">
                            🎯 Focus Area:
                            <strong>
                                {" "}
                                {weakTopic} Practice
                            </strong>
                        </div>

                    </div>

                )
            }                        
            {/* SECOND GRID */}

            <div className="stats-grid">
                {
                    loading ? (

                        <div className="card skeleton-large-card skeleton-topics"></div>

                    ) : (
                                weakTopics.length > 0 && (

                                    <div className="card">

                                        <h2 className="card-title">
                                            <MdOutlineWarningAmber className="weak-icon"/>
                                            Weak Topics
                                        </h2>

                                        {

                                            weakTopics.map(
                                                (
                                                    topic,
                                                    index
                                                ) => (

                                                    <div
                                                        className="topic-bar-card"
                                                        key={index}
                                                    >
                                                        <div className="topic-header">
                                                            <span>
                                                                {topic.topic}
                                                            </span>
                                                            <strong>
                                                                {topic.percentage}%
                                                            </strong>

                                                        </div>
                                                        <div className="progress-bar">
                                                            <div 
                                                                className="weak-fill"
                                                                style={{
                                                                    width:
                                                                    `${topic.percentage}%`
                                                                }}    
                                                            >
                                                            </div>
                                                        </div>
                                                    </div>               
                                                )
                                            )
                                        }

                                </div>

                            )
                        )
                        }
                {
                    loading ? (

                        <div className="card skeleton-large-card skeleton-topics"></div>

                    ) : (
                                strongTopics.length > 0 && (

                                    <div className="card">

                                        <h2 className="card-title">
                                            <GiBiceps className="strong-icon"/>
                                            Strong Topics
                                        </h2>

                                        {

                                            strongTopics.map(
                                                (
                                                    topic,
                                                    index
                                                ) => (

                                                    <div
                                                        className="topic-bar-card"
                                                        key={index}
                                                    >

                                                        <div className="topic-header">

                                                            <span>
                                                                {topic.topic}
                                                            </span>

                                                            <strong>
                                                                {topic.percentage}%
                                                            </strong>

                                                        </div>

                                                        <div className="progress-bar">

                                                            <div
                                                                className="strong-fill"
                                                                style={{
                                                                    width:
                                                                    `${topic.percentage}%`
                                                                }}
                                                            />

                                                        </div>

                                                    </div>

                                                )
                                            )
                                        }

                                    </div>

                                )
                            )
                            }

            </div>

            {/* RECOMMENDATIONS */}

            {
                loading ? (

                    <div className="card skeleton-large-card"></div>

                ) : (

                    recommendations.length > 0 && (


                                <div className="card recommendation-card">

                                    <h2 className="card-title">
                                        <BsLightbulb/>
                                        Recommended Problems
                                    </h2>

                                    <p>

                                        Weakest Topic :

                                        <strong>

                                            {" "}
                                            {weakestTopic}

                                        </strong>

                                    </p>

                                    <div className="recommendation-grid">

                                        {

                                            recommendations.map(
                                                (
                                                    problem,
                                                    index
                                                ) => (
                                                    
                                                    <div
                                                        className="problem-card"
                                                        key={index}
                                                        onClick={()=>
                                                            window.open(
                                                                problem.url,"_blank"
                                                            )
                                                        }
                                                    >

                                                        <div className="problem-top">

                                                            <h3>
                                                                {problem.name}
                                                            </h3>

                                                            <span className="problem-rating">
                                                                {problem.difficulty}
                                                            </span>

                                                        </div>

                                                        <div className="problem-bottom">

                                                            <div className="problem-tags">

                                                                <span className="tag">
                                                                    {problem.topic}
                                                                </span>

                                                                <span className="tag">
                                                                    {problem.platform}
                                                                </span>

                                                            </div>

                                                            <span className="arrow">
                                                                →
                                                            </span>

                                                        </div>

                                                    </div>
                                                ))
                                        }
                                    </div>
                                </div>
                            )
                        )
                    }
                    <footer className="footer">

                        <div className="footer-content">

                            <h3>CP Coach v1.0</h3>

                            <p>
                                Analyze your Codeforces profile, discover weak topics
                                and improve your competitive programming journey.
                            </p>

                            <div className="footer-tech">

                                <span>React</span>
                                <span>Node.js</span>
                                <span>Express</span>
                                <span>Codeforces API</span>

                            </div>
                            <div className="footer-links">

                                <a
                                    href="https://github.com/swantinmathew"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaGithub />
                                </a>

                                <a
                                    href="https://linkedin.com/in/swantinmathew"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaLinkedin />
                                </a>

                            </div>
                        </div>

                    </footer>
        </div>
    );
}

export default Dashboard;