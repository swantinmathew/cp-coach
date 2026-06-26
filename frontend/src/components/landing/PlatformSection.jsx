import "./PlatformSection.css";
import DashboardPreview from "./DashboardPreview";
import { Link } from "react-router-dom";
import {
    FaBookOpen,
    FaChartBar,
    FaCodeCompare,
    FaChartLine
} from "react-icons/fa6";

function PlatformSection() {
    return (

        <section className="platform-section">

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

                <div className="platform-preview">

                    <DashboardPreview />

                </div>

            </div>
            
            <div className="platform-grid">

                <div className="platform-card">

                    <div className="preview-panel">

                        <div className="roadmap-preview">

                            <div className="roadmap-chip">
                                Arrays
                            </div>

                            <div className="roadmap-arrow">
                                →
                            </div>

                            <div className="roadmap-chip">
                                Strings
                            </div>

                            <div className="roadmap-arrow">
                                →
                            </div>

                            <div className="roadmap-chip">
                                Trees
                            </div>

                            <div className="roadmap-arrow down">
                                ↓
                            </div>

                            <div className="roadmap-chip">
                                Graphs
                            </div>

                            <div className="roadmap-arrow">
                                →
                            </div>

                            <div className="roadmap-chip">
                                DP
                            </div>

                        </div>

                    </div>

                    <div className="card-content">

                        <div className="card-icon green">

                            📚

                        </div>

                        <h3>

                            Structured Roadmaps

                        </h3>

                        <p>

                            Follow curated learning paths
                            for DSA, placements and
                            competitive programming.

                        </p>

                        <Link
                            to="/roadmaps/dsa"
                            className="card-link green"
                        >

                            Explore →

                        </Link>

                    </div>

                </div>

               <div className="platform-card">

                    <div className="preview-panel">

                        <h5>

                            Rating History

                        </h5>

                        <div className="mini-bars">

                            <div className="bar h40"></div>

                            <div className="bar h65"></div>

                            <div className="bar h55"></div>

                            <div className="bar h90"></div>

                            <div className="bar h70"></div>

                        </div>

                    </div>

                    <div className="card-content">

                        <div className="card-icon blue">

                            📊

                        </div>

                        <h3>

                            Analytics Dashboard

                        </h3>

                        <p>

                            Visualize rating trends,
                            contest history and
                            identify weak topics.

                        </p>

                        <Link
                            to="/dashboard"
                            className="card-link blue"
                        >

                            Open Dashboard →

                        </Link>

                    </div>

                </div>

                <div className="platform-card">

                    <div className="preview-panel compare-panel">

                        <div className="compare-side">

                            <strong>

                                tourist

                            </strong>

                            <h2>

                                3486

                            </h2>

                        </div>

                        <div className="compare-vs">

                            VS

                        </div>

                        <div className="compare-side">

                            <strong>

                                Benq

                            </strong>

                            <h2>

                                3792

                            </h2>

                        </div>

                    </div>

                    <div className="card-content">

                        <div className="card-icon orange">

                            ⚔️

                        </div>

                        <h3>

                            Compare Profiles

                        </h3>

                        <p>

                            Benchmark yourself against
                            other Codeforces users.

                        </p>

                        <Link
                            to="/compare-direct"
                            className="card-link orange"
                        >

                            Compare Now →

                        </Link>

                    </div>

                </div>
                
                <div className="platform-card">

                    <div className="preview-panel progress-panel">

                        <div className="progress-circle">

                            72%

                        </div>

                        <div className="progress-list">

                            <span>✔ Arrays</span>

                            <span>✔ Strings</span>

                            <span>✔ Trees</span>

                            <span>○ Graphs</span>

                        </div>

                    </div>

                    <div className="card-content">

                        <div className="card-icon yellow">

                            📈

                        </div>

                        <h3>

                            Progress Tracking

                        </h3>

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