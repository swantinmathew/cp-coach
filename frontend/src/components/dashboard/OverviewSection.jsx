import "./OverviewSection.css";
function OverviewSection({ profile }) {
    if (!profile) return null;
    return (
        <div className="overview-section">
            <div className="welcome-card">
                <h2>
                    Welcome back
                    {profile.handle}
                </h2>
                <p>
                    Here's your latest
                    Codeforces performance.
                </p>
            </div>
            <div className="stats-row">
                <div className="stat-card">
                    <h3>
                        Current Rating
                        <p>{profile.rating}</p>
                    </h3>
                </div>
                <div className="stat-card">
                    <h3>
                        Max Rating
                        <p>{profile.maxRating}</p>
                    </h3>
                </div>
                <div className="stat-card">
                    <h3>Rank</h3>
                    <p>{profile.rank}</p>
                </div>
            </div>
        </div>
    );
}

export default OverviewSection;