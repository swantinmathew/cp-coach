import "./AnalyticsSection.css";
import { Link } from "react-router-dom";

function AnalyticsSection() {

    return (

        <section className="analytics-section">

            <div className="analytics-header">

                <span className="section-badge">
                    TOOLS
                </span>

                <h2>
                    Powerful Analytics Tools
                </h2>

                <p>
                    Analyze performance, compare profiles
                    and discover areas for improvement.
                </p>

            </div>

            <div className="analytics-grid">

                <div className="analytics-card">

                    <div className="analytics-icon">
                        📈
                    </div>

                    <h3>
                        Codeforces Dashboard
                    </h3>

                    <p>
                        View rating history, contest
                        performance and detailed profile
                        statistics.
                    </p>

                    <Link
                        to="/dashboard"
                        className="analytics-link"
                    >
                        Open Dashboard →
                    </Link>

                </div>

                <div className="analytics-card">

                    <div className="analytics-icon">
                        ⚔️
                    </div>

                    <h3>
                        Compare Profiles
                    </h3>

                    <p>
                        Compare two Codeforces users
                        side by side and identify
                        strengths and weaknesses.
                    </p>

                    <Link to="/compare-direct">
                        Compare Now →
                    </Link>

                </div>

            </div>

        </section>

    );

}

export default AnalyticsSection;