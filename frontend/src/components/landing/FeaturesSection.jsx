import "./FeaturesSection.css";
import { Link } from "react-router-dom";
function FeaturesSection(){
    return(
        <section className="features-section">

            <div className="features-header">

                <span className="section-badge">
                    YOURS JOURNEY
                </span>

                <h2>
                    Choose Your Direction
                </h2>

                <p>
                    Whether you're learning DSA,
                    preparing for placements, or
                    competing in contests, we'll
                    help you move forward.
                </p>

            </div>

            <div className="journey-container">
                
                <div className="journey-item">

                    <div className="journey-number">

                        01
                    </div>

                    <div className="journey-content">

                        <h3>
                            Learn DSA
                        </h3>

                        <p>
                            Arrays → Strings →
                            Hashing → Trees →
                            Graphs → Dynamic Programming
                        </p>
                        <Link
                            to="/roadmaps/dsa"
                            className="journey-link"
                        >
                            Explore Roadmap →
                        </Link>    
                    </div>

                </div>

                <div className="journey-line"></div>

                <div className="journey-item">

                    <div className="journey-number">

                        02
                        
                    </div>

                    <div className="journey-content">

                        <h3>
                            Placement Preperation
                        </h3>
                        
                        <p>
                            DSA → Projects →
                            Core CS → Resume →
                            Interviews
                        </p>
                        <Link
                            to="/placement-roadmap"
                            className="journey-link"
                        >
                            Open Roadmap →
                        </Link>

                    </div>

                </div>

                <div className="jouney-line"></div>

                <div className="journey-item">

                    <div className="journey-number">
                        03
                    </div>

                    <div className="journey-content">

                        <h3>
                            Competitive Programming
                        </h3>

                        <p>
                            Codeforces →
                            LeetCode →
                            Analytics →
                            Improvement

                        </p>

                    </div>

                </div>

            </div>

            <div className="growth-section">

                <div className="growth-header">

                    <span className="section-badge">
                        PLATFORM
                    </span>

                    <h2>
                        Everything You Need To Grow
                    </h2>

                    <p>
                        A complete ecosystem designed to help
                        students learn, practice, track and
                        improve consistently.
                    </p>

                </div>

                <div className="growth-grid">

                    <div className="growth-card large">

                        <div className="path-preview">

                            <div className="path-pill">
                                Learn DSA
                            </div>

                            <div className="path-pill">
                                Placement Prep
                            </div>

                            <div className="path-pill">
                                Competitive Coding
                            </div>

                        </div>

                        <h3>
                            Personalized Learning Paths
                        </h3>

                        <p>
                            Follow structured journeys for DSA,
                            placements and competitive
                            programming.
                        </p>

                    </div>
                    <div className="growth-card large">
                        <div className="roadmap-preview">

                            <div className="roadmap-step">
                                Arrays
                            </div>

                            <div className="roadmap-arrow">
                                →
                            </div>

                            <div className="roadmap-step">
                                Strings
                            </div>

                            <div className="roadmap-arrow">
                                →
                            </div>

                            <div className="roadmap-step">
                                Trees
                            </div>

                            <div className="roadmap-arrow">
                                →
                            </div>

                            <div className="roadmap-step">
                                Graphs
                            </div>

                        </div>
                        <h3>
                            Curated Roadmaps & Resources
                        </h3>

                        <p>
                            No more random tutorials.
                            Learn with clear and organized
                            roadmaps.
                        </p>

                    </div>

                    <div className="growth-card">

                        <div className="progress-preview">

                            <div className="bar small"></div>

                            <div className="bar medium"></div>

                            <div className="bar large"></div>

                            <div className="bar medium"></div>

                            <div className="bar xlarge"></div>

                        </div>    

                        <h3>
                            Track Progress
                        </h3>

                        <p>
                            Measure your growth and stay
                            consistent.
                        </p>

                    </div>

                    <div className="growth-card">

                        <div className="analytics-preview">

                            <div className="analytics-stat">
                                <span>Rating</span>
                                <strong>1542</strong>
                            </div>

                            <div className="analytics-stat">
                                <span>Score</span>
                                <strong>82</strong>
                            </div>

                            <div className="analytics-stat">
                                <span>Weak Topic</span>
                                <strong>DP</strong>
                            </div>

                        </div>

                        <h3>
                            Profile Analytics
                        </h3>

                        <p>
                            Analyze Codeforces and
                            LeetCode performance.
                        </p>

                    </div>

                    <div className="growth-card">

                        <div className="compare-preview">

                            <div className="compare-user">
                                <strong>tourist</strong>
                                <p>3486</p>
                            </div>

                            <span className="vs-text">
                                VS
                            </span>

                            <div className="compare-user">
                                <strong>Benq</strong>
                                <p>3792</p>
                            </div>

                        </div>

                        <h3>
                            Compare Profiles
                        </h3>

                        <p>
                            Benchmark yourself against
                            other programmers.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}
export default FeaturesSection;