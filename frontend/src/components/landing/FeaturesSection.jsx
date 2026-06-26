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

        </section>
    );
}
export default FeaturesSection;