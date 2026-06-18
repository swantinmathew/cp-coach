import "./BottomSection.css";
function BottomSection({
    weakTopics,
    strongTopics,
    recommendations
}) {
    
    return (
        <div className="bottom-section">
            <div className="topic-analysis-card">
                <h3>Topic Analysis</h3>
                <div className="topics-grid">
                    <div className="topic-card">
                        <h3>Weak Topics</h3>
                        {weakTopics?.weakTopics?.map((topic, index) => (
                            <div
                                key={index}
                                className="topic-item"
                            >
                                <span>
                                    {topic.topic}
                                </span>
                                <div className="progress-wrapper">

                                    <div className="progress-track">

                                        <div
                                            className="progress-fill weak"
                                            style={{
                                                width:
                                                `${topic.percentage}%`
                                            }}
                                        />

                                    </div>

                                    <span>
                                        {topic.percentage}%
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="topic-card">

                        <h3 className="strong-title">
                            Strong Topics
                        </h3>

                        {strongTopics?.strongTopics?.map((topic, index) => (

                            <div
                                key={index}
                                className="topic-item"
                            >

                                <span>
                                    {topic.topic}
                                </span>

                                <div className="progress-wrapper">

                                    <div className="progress-track">

                                        <div
                                            className="progress-fill strong"
                                            style={{
                                                width:
                                                `${topic.percentage}%`
                                            }}
                                        />

                                    </div>

                                    <span>
                                        {topic.percentage}%
                                    </span>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </div>
            

            <div className="recommendation-card">

            <h3>Recommended Problems</h3>

            {recommendations?.recommendations?.map(
                (problem, index) => (

                    <div
                        key={index}
                        className="problem-card"
                    >

                        <h4>
                            {problem.name}
                        </h4>

                        <p>
                            Topic: {problem.topic}
                        </p>

                        <p>
                            Difficulty:
                            {" "}
                            {problem.difficulty}
                        </p>
                        <button
                            className="solve-btn"
                            onClick={()=>
                                window.open(
                                    problem.link,"_blank"
                                )
                            }
                        >
                            Solve Problem
                        </button>

                    </div>

                )
            )}

        </div>

        </div>

    );
}
export default BottomSection;