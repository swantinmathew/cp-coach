import "./RoadmapShowcase.css";
import { Link } from "react-router-dom";

function RoadmapShowcase() {

    return (

        <section className="roadmap-showcase">

            <div className="roadmap-header">

                <span className="section-badge">
                    ROADMAPS
                </span>

                <h2>
                    Roadmaps Built For Success
                </h2>

                <p>
                    Follow structured learning paths
                    designed for every stage of your
                    programming journey.
                </p>

            </div>

            <div className="roadmap-grid">

                <div className="roadmap-card">

                    <div className="roadmap-icon">
                        📘
                    </div>

                    <h3>
                        DSA Roadmap
                    </h3>

                    <div className="roadmap-tags">

                        <span>Arrays</span>
                        <span>Strings</span>
                        <span>Trees</span>
                        <span>Graphs</span>
                        <span>DP</span>

                    </div>

                    <p>
                        Learn Data Structures &
                        Algorithms from beginner to
                        advanced with a structured path.
                    </p>

                    <Link
                        to="/roadmaps/dsa"
                        className="roadmap-link"
                    >
                        Explore →
                    </Link>

                </div>

                <div className="roadmap-card">

                    <div className="roadmap-icon">
                        💼
                    </div>

                    <h3>
                        Placement Roadmap
                    </h3>

                    <div className="roadmap-tags">

                        <span>Projects</span>
                        <span>DBMS</span>
                        <span>OS</span>
                        <span>CN</span>
                        <span>Resume</span>

                    </div>

                    <p>
                        Prepare for placements with
                        projects, core CS subjects and
                        interview preparation.
                    </p>

                    <Link
                        to="/placement-roadmap"
                        className="roadmap-link"
                    >
                        Explore →
                    </Link>

                </div>

                <div className="roadmap-card">

                    <div className="roadmap-icon">
                        🏆
                    </div>

                    <h3>
                        Competitive Programming
                    </h3>

                    <div className="roadmap-tags">

                        <span>Greedy</span>
                        <span>Math</span>
                        <span>Graphs</span>
                        <span>DP</span>
                        <span>Codeforces</span>

                    </div>

                    <p>
                        Improve your competitive
                        programming skills through
                        structured practice.
                    </p>

                    <Link
                        to="/cp-roadmap"
                        className="roadmap-link"
                    >
                        Explore →
                    </Link>

                </div>

            </div>

        </section>

    );

}

export default RoadmapShowcase;