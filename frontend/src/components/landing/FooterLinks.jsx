import "./FooterLinks.css";
import { Link } from "react-router-dom";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram
} from "react-icons/fa";

function FooterLinks() {
    return (

        <section className="footer-links">

            <div className="footer-grid">

                <div className="footer-brand">

                    <h2>CP Coach</h2>

                    <p>
                        Learn DSA, prepare for placements,
                        analyze Codeforces performance and
                        become a better programmer.
                    </p>

                </div>

                <div className="footer-column">

                    <h4>Platform</h4>

                    <Link to="/">Home</Link>

                    <Link to="/roadmaps/dsa">DSA Roadmap</Link>

                    <Link to="/placement-roadmap">
                        Placement Roadmap
                    </Link>

                    <Link to="/dashboard">
                        Dashboard
                    </Link>

                </div>

                <div className="footer-column">

                    <h4>Tools</h4>

                    <Link to="/compare-direct">
                        Compare Profiles
                    </Link>

                    <Link to="/dashboard">
                        Analytics
                    </Link>

                    <Link to="/roadmaps/dsa">
                        Resources
                    </Link>

                </div>

                <div className="footer-column">

                    <h4>Connect</h4>

                    <a
                        href="https://github.com/"
                        target="_blank"
                    >
                        <FaGithub />
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                    >
                        <FaLinkedin />
                        LinkedIn
                    </a>

                    <a
                        href="https://instagram.com/"
                        target="_blank"
                    >
                        <FaInstagram />
                        Instagram
                    </a>

                </div>

            </div>

        </section>

    );
}

export default FooterLinks;