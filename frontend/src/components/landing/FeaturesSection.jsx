import "./FeaturesSection.css";
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

                    </div>

                </div>

                <div className="journey-line"></div>

                <div className="journey-item">

                    <div className="jour`ney-number">

                        02
                        
                    </div>

                    <div className="jouney-content">

                        <h3>
                            Plaacement Preperation
                        </h3>
                        
                        <p>
                            DSA → Projects →
                            Core CS → Resume →
                            Interviews
                        </p>

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

                    <span clasName="section-badge">
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

                        <h3>
                            Track Progress
                        </h3>

                        <p>
                            Measure your growth and stay
                            consistent.
                        </p>

                    </div>

                    <div className="growth-card">

                        <h3>
                            Profile Analytics
                        </h3>

                        <p>
                            Analyze Codeforces and
                            LeetCode performance.
                        </p>

                    </div>

                    <div className="growth-card">

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