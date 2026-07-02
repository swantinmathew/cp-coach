import "./PlatformSection.css";
import { Link } from "react-router-dom";
function PlatformSection() {
    return (

        <section id="platform" className="platform-section">

            <div className="platform-hero">

                <div className="platform-content">

                    <span className="section-badge">
                        PLATFORM
                    </span>

                    <h2>
                        One Platform.
                        <br />
                        Everything You Need To Improve.
                    </h2>

                    <p>
                        Learn, practice, analyze and grow
                        with tools built for competitive
                        programmers.
                    </p>

                </div>

            </div>
            
            <div className="feature-grid">

                <div className="feature-card">

                    <div className="feature-image roadmap-preview">

                        {/* roadmap illustration */}

                    </div>

                    <div className="feature-info">

                        <div className="feature-icon green">
                            📚
                        </div>

                        <h3>Structured Roadmaps</h3>

                        <p>
                            Follow curated learning paths for DSA,
                            Placements and Competitive Programming.
                        </p>

                        <Link
                            to="/roadmaps/dsa"
                            className="feature-link green"
                        >
                            Explore →
                        </Link>

                    </div>

                </div>

                <div className="feature-card">

                    <div className="feature-image analytics-preview">

                        {/* chart */}

                    </div>

                    <div className="feature-info">

                        <div className="feature-icon blue">
                            📊
                        </div>

                        <h3>Analytics Dashboard</h3>

                        <p>
                            Visualize rating trends,
                            contest history and weak areas.
                        </p>

                        <Link
                            to="/dashboard"
                            className="feature-link blue"
                        >
                            Open Dashboard →
                        </Link>

                    </div>

                </div>

                <div className="feature-card">

                    <div className="feature-image compare-preview">

                        {/* compare illustration */}

                    </div>

                    <div className="feature-info">

                        <div className="feature-icon orange">
                            ⚔️
                        </div>

                        <h3>Compare Profiles</h3>

                        <p>
                            Benchmark yourself against
                            other Codeforces users.
                        </p>

                        <Link
                            to="/compare-direct"
                            className="feature-link orange"
                        >
                            Compare Now →
                        </Link>

                    </div>

                </div>
                
                <div className="feature-card">

                    <div className="feature-image progress-preview">

                        {/* progress illustration */}

                    </div>

                    <div className="feature-info">

                        <div className="feature-icon yellow">
                            📈
                        </div>

                        <h3>Progress Tracking</h3>

                        <p>
                            Track completed topics,
                            consistency and milestones.
                        </p>

                        <span className="coming-soon">
                            Coming Soon
                        </span>

                    </div>

                </div>

            </div>

        </section>

    );
}

export default PlatformSection;