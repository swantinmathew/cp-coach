import "./DashboardShowcase.css";

function DashboardShowcase() {

    return (

        <section className="showcase-section">

            <div className="showcase-header">

                <span className="section-badge">
                    DASHBOARD
                </span>

                <h2>
                    See Your Progress In One Place
                </h2>

                <p>
                    Track learning progress,
                    analyze coding profiles,
                    compare performance and
                    discover what to improve next.
                </p>

            </div>

            <div className="showcase-content">

                <div className="dashboard-preview">

                    Dashboard Screenshot

                </div>

                <div className="showcase-benefits">

                    <div className="benefit">
                        ✓ Track Ratings
                    </div>

                    <div className="benefit">
                        ✓ Placement Score
                    </div>

                    <div className="benefit">
                        ✓ Weak Topics
                    </div>

                    <div className="benefit">
                        ✓ Compare Profiles
                    </div>

                    <div className="benefit">
                        ✓ Growth Analytics
                    </div>

                </div>

            </div>

        </section>

    );

}

export default DashboardShowcase;