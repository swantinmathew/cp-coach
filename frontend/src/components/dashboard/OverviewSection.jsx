import "./OverviewSection.css";
function OverviewSection({ 
    profile,
    placementScore
}) {
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
                    <h4>Placemet Score</h4>
                    <h3>{placementScore?.score}</h3>
                    <p>{placementScore?.level}</p>
                </div>
                <div className="overview-card">
                    <h4>Problem Solved</h4>
                    <h3>{placementScore?.problemsSolved}</h3>
                    <p>Across all contests</p>
                </div>
            </div>
        </div>
    );
}

export default OverviewSection;