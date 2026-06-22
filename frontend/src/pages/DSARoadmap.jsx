import "./DSARoadmap.css";

function DSARoadmap() {

    const topics = [
        "Arrays",
        "Strings",
        "Hashing",
        "Sliding Window",
        "Linked Lists",
        "Stack & Queue",
        "Binary Search",
        "Trees",
        "Graphs",
        "Dynamic Programming"
    ];

    return (
        <div className="roadmap-page">

            <div className="roadmap-header">

                <span className="section-badge">
                    ROADMAP
                </span>

                <h1>
                    DSA Roadmap
                </h1>

                <p>
                    Follow a structured path from beginner
                    to advanced problem solving.
                </p>

            </div>

            <div className="timeline">

                {topics.map((topic, index) => (

                    <div
                        className="timeline-item"
                        key={index}
                    >

                        <div className="timeline-left">

                            <div className="node-circle">
                                {index + 1}
                            </div>

                            {index !== topics.length - 1 && (
                                <div className="timeline-line"></div>
                            )}

                        </div>

                        <div className="topic-card">

                            <h3>
                                {topic}
                            </h3>

                            <p>
                                Click to explore resources,
                                patterns and practice problems.
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default DSARoadmap;