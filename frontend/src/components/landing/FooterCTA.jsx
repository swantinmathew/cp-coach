import "./FooterCTA.css";
import footerDashboard from "../../assets/footer-dashboard.jpg";

function FooterCTA(){

    return(

        <section className="footer-cta">

            <div className="cta-content">

                <span className="section-badge">

                    READY TO LEVEL UP?

                </span>

                <h2>

                    Start Your Journey
                    <br/>
                    With <span>CP Coach</span> Today.

                </h2>

                <p>

                    Track your progress.
                    Analyze performance.
                    Master DSA.
                    Improve your Codeforces rating.

                </p>

                <div className="cta-buttons">

                    <button className="primary-btn">

                        Get Started →

                    </button>

                    <button className="secondary-btn">

                        Explore Features

                    </button>

                </div>

            </div>

            <div className="cta-dashboard">

                <img
                    src={footerDashboard}
                    alt="Dashboard Preview"
                    className="footer-dashboard-image"
                />
            </div>

        </section>

    );

}

export default FooterCTA;