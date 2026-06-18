import "./AnalyticsSection.css";
import RatingChart from "./RatingChart";
import ContestPerformanceChart from "./ContestPerformanceChart";

function AnalyticsSection(
    {ratingHistory,profile}
) {
    const changes = ratingHistory?.map(
        contest => contest.newRating - contest.oldRating
    ) || [];
    const bestGain = changes.length ? Math.max(...changes) : 0;
    const worstLoss = changes.length ? Math.min(...changes) : 0;
    const averageChange = changes.length ? Math.round(changes.reduce((sum,val) => sum + val,0)/changes.length
    ) : 0;
    return (
        <div className="analytics-section">
            <div className="chart-card">
                <h3>
                    Rating Progress
                </h3>
                <RatingChart
                    ratingHistory={
                        ratingHistory
                    }
                />
            </div>
            <div className="contest-card">
                <h3>Contest Performance</h3>

                <div className="contest-stats">

                    <div className="contest-stat">
                        <span>Best Gain</span>
                        <h2>+{bestGain}</h2>
                    </div>

                    <div className="contest-stat">
                        <span>Worst Loss</span>
                        <h2>{worstLoss}</h2>
                    </div>

                    <div className="contest-stat">
                        <span>Average Change</span>
                        <h2>
                            {averageChange > 0
                                ? `+${averageChange}`
                                : averageChange}
                        </h2>
                    </div>

                </div>

                <ContestPerformanceChart
                    ratingHistory={ratingHistory}
                />
                
            </div>

        </div>
    );
}

export default AnalyticsSection;