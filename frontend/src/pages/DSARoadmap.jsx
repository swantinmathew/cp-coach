import "./DSARoadmap.css";
import { useState } from "react";

function DSARoadmap() {

    const roadmapData = {
        Arrays: {
            learn: [
                "Traversal",
                "Prefix Sum",
                "Two Pointers"
            ],
            resources: [
                "Striver A2Z",
                "NeetCode Arrays"
            ],
            problems: [
                "Two Sum",
                "Best Time To Buy Stock"
            ]
        },

        Strings: {
            learn: [
                "Character Arrays",
                "Palindrome",
                "Pattern Matching"
            ],
            resources: [
                "NeetCode Strings",
                "GFG Strings"
            ],
            problems: [
                "Valid Anagram",
                "Longest Common Prefix"
            ]
        },

        Hashing: {
            learn: [
                "HashMap",
                "HashSet",
                "Frequency Count"
            ],
            resources: [
                "Striver Hashing"
            ],
            problems: [
                "Contains Duplicate",
                "Two Sum"
            ]
        }
    };

    const [selectedTopic, setSelectedTopic] =
        useState("Arrays");

    return (

        <div className="roadmap-page">

            <div className="roadmap-header">

                <h1>
                    DSA Roadmap
                </h1>

                <p>
                    Follow a structured path and
                    master Data Structures &
                    Algorithms.
                </p>

            </div>

            <div className="roadmap-layout">

                <div className="topics-sidebar">

                    {Object.keys(roadmapData).map(
                        (topic) => (

                            <button
                                key={topic}
                                className={
                                    selectedTopic === topic
                                        ? "topic-btn active"
                                        : "topic-btn"
                                }
                                onClick={() =>
                                    setSelectedTopic(
                                        topic
                                    )
                                }
                            >
                                {topic}
                            </button>

                        )
                    )}

                </div>

                <div className="topic-details">

                    <h2>
                        {selectedTopic}
                    </h2>

                    <div className="detail-section">

                        <h3>
                            What You'll Learn
                        </h3>

                        <ul>
                            {roadmapData[selectedTopic]
                                .learn.map((item) => (
                                    <li key={item}>
                                        {item}
                                    </li>
                                ))}
                        </ul>

                    </div>

                    <div className="detail-section">

                        <h3>
                            Resources
                        </h3>

                        <ul>
                            {roadmapData[selectedTopic]
                                .resources.map((item) => (
                                    <li key={item}>
                                        {item}
                                    </li>
                                ))}
                        </ul>

                    </div>

                    <div className="detail-section">

                        <h3>
                            Practice Problems
                        </h3>

                        <ul>
                            {roadmapData[selectedTopic]
                                .problems.map((item) => (
                                    <li key={item}>
                                        {item}
                                    </li>
                                ))}
                        </ul>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default DSARoadmap;