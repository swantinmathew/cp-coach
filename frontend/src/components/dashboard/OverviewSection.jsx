import "./OverviewSection.css";
function OverviewSection({ profile }) {
    if (!profile) return null;
    return (
        <div className="overview-banner">
            <div className="welcome-content">
                <h2>
                    Welcome back,
                    <br/>
                    <span>{ profile.handle }</span>
                </h2>
                <p>
                    Keep pushing your limits and
                    become better every day.
                </p>
            </div>
            <div className="overview-stats">
                <div className="overview-card">
                    <h4>Current Rating</h4>
                    <h3>{profile.rating}</h3>
                    <p>{profile.rank}</p>
                </div>
                <div className="overview-card">
                    <h4>Max Rating</h4>
                    <h3>{profile.maxRating}</h3>
                    <p>{profile.maxRank}</p>    
                </div>
                <div className="overview-card">
                    <h4>Contribution</h4>
                    <h3>{profile.contribution}</h3>
                    <p>Community Score</p>
                </div>
            </div>
        </div>
    );
}

export default OverviewSection;