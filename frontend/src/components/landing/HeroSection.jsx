import "./HeroSection.css";
import heroImage from "../../assets/hero-image.jpg";
function HeroSection(){
    return(
        <section className="hero">

            <div className="hero-content">

                {/* LEFT CONTENT */}

                <div className="hero-left">

                    <div className="hero-badge">
                        🚀 For Competitive Programmers
                    </div>

                    <h1>
                        Analyse.
                        <br />
                        <span>Improve.</span>
                        <br />
                        Outperform.
                    </h1>

                    <p>
                        Transform your Codeforces profile into actionable insights.
                        Discover weak topics, follow personalized learning roadmaps,
                        compare with top coders, and track your competitive programming
                        journey—all from one platform.
                    </p>

                    <div className="hero-btns">

                        <button className="analyze-btn">
                            Analyze Your Profile
                        </button>

                        <button className="demo-btn">
                            Explore Platform
                        </button>

                    </div>

                    <div className="hero-users">

                        <div className="avatar-group">

                            <img src="https://i.pravatar.cc/40?img=1" alt="" />
                            <img src="https://i.pravatar.cc/40?img=2" alt="" />
                            <img src="https://i.pravatar.cc/40?img=3" alt="" />
                            <img src="https://i.pravatar.cc/40?img=4" alt="" />

                        </div>

                        <div className="user-text">

                            <strong>10,000+</strong>
                            <span>Competitive programmers</span>

                        </div>

                    </div>

                </div>

                {/* RIGHT VISUAL */}

                <div className="hero-right">

                    <div className="hero-glow"></div>

                    <div className="floating-card top">

                        <h3>250K+</h3>

                        <p>Profiles Analyzed</p>

                    </div>

                    <div className="dashboard-card">

                        <div className="dashboard-sidebar">

                            <div className="sidebar-logo">
                                CP
                            </div>

                            <span>Overview</span>

                            <span>Contests</span>

                            <span>Problems</span>

                            <span>Roadmaps</span>

                            <span>Analytics</span>

                        </div>

                        <div className="dashboard-main">

                            <div className="stats-row">

                                <div className="stat-box">

                                    <small>Current Rating</small>

                                    <h3>1847</h3>

                                </div>

                                <div className="stat-box">

                                    <small>Max Rating</small>

                                    <h3>2056</h3>

                                </div>

                                <div className="stat-box">

                                    <small>Solved</small>

                                    <h3>1523</h3>

                                </div>

                            </div>

                            <div className="dashboard-chart">

                                Rating Graph

                            </div>

                            <div className="dashboard-bottom">

                                <div className="contest-list">

                                    Recent Contests

                                </div>

                                <div className="topic-chart">

                                    Topic Strength

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="floating-card bottom">

                        <h3>50K+</h3>

                        <p>Contests Tracked</p>

                    </div>

                </div>

            </div>

        </section>
    );
}
export default HeroSection;