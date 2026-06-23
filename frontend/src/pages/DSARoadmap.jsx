import "./DSARoadmap.css";
import { useState } from "react";

function DSARoadmap() {

    const roadmapData = {

        Arrays: {
            description:
                "Learn traversal, prefix sums, two pointers and common array patterns.",

            learn: [
                "Traversal",
                "Prefix Sum",
                "Two Pointers"
            ],

            resources: [
                { title: "NeetCode Arrays" },
                { title: "Striver Arrays" }
            ],

            problems: [
                {
                    name: "Two Sum",
                    difficulty: "Easy"
                },
                {
                    name: "Best Time To Buy Stock",
                    difficulty: "Easy"
                }
            ]
        },

        Strings: {
            description:
                "Master string manipulation, palindrome techniques and pattern matching.",

            learn: ["Basics", "Palindrome", "Pattern Matching"],

            resources: [
                { title: "NeetCode Strings" }
            ],

            problems: [
                {
                    name: "Valid Anagram",
                    difficulty: "Easy"
                }
            ]
        },

        Hashing: {
            description:
                "Understand HashMap, HashSet and frequency counting techniques.",

            learn: ["HashMap", "HashSet", "Frequency Count"],

            resources: [
                { title: "Hashing Fundamentals" }
            ],

            problems: [
                {
                    name: "Contains Duplicate",
                    difficulty: "Easy"
                }
            ]
        },

        "Sliding Window": {
            description:
                "Learn fixed and variable window patterns for optimized solutions.",

            learn: ["Fixed Window", "Variable Window"],

            resources: [
                { title: "Sliding Window Patterns" }
            ],

            problems: [
                {
                    name: "Maximum Average Subarray",
                    difficulty: "Medium"
                }
            ]
        },

        "Linked Lists": {
            description:
                "Master pointers, reversal and fast-slow pointer techniques.",

            learn: ["Traversal", "Reversal", "Fast Slow Pointers"],

            resources: [
                { title: "Linked List Guide" }
            ],

            problems: [
                {
                    name: "Reverse Linked List",
                    difficulty: "Easy"
                }
            ]
        },

        "Stack & Queue": {
            description:
                "Learn LIFO, FIFO and monotonic stack patterns.",

            learn: ["Stack", "Queue", "Monotonic Stack"],

            resources: [
                { title: "Stack & Queue Basics" }
            ],

            problems: [
                {
                    name: "Valid Parentheses",
                    difficulty: "Easy"
                }
            ]
        },

        "Binary Search": {
            description:
                "Learn searching on sorted arrays and answer-space searching.",

            learn: ["Classic Binary Search", "Search Space"],

            resources: [
                { title: "Binary Search Patterns" }
            ],

            problems: [
                {
                    name: "Search Insert Position",
                    difficulty: "Easy"
                }
            ]
        },

        Trees: {
            description:
                "Master DFS, BFS and recursive tree traversals.",

            learn: ["DFS", "BFS", "Recursion"],

            resources: [
                { title: "Tree Fundamentals" }
            ],

            problems: [
                {
                    name: "Maximum Depth Of Binary Tree",
                    difficulty: "Easy"
                }
            ]
        },

        Graphs: {
            description:
                "Learn traversal, shortest paths and graph representations.",

            learn: ["BFS", "DFS", "Shortest Path"],

            resources: [
                { title: "Graph Roadmap" }
            ],

            problems: [
                {
                    name: "Number Of Islands",
                    difficulty: "Medium"
                }
            ]
        },

        "Dynamic Programming": {
            description:
                "Learn memoization, tabulation and state transitions.",

            learn: ["Memoization", "Tabulation"],

            resources: [
                { title: "DP Patterns" }
            ],

            problems: [
                {
                    name: "Climbing Stairs",
                    difficulty: "Easy"
                }
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
                    <p className="topic-description">
                        {roadmapData[selectedTopic].description}
                    </p>

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

                        <div className="resources-grid">

                            {roadmapData[selectedTopic]
                                .resources.map((resource) => (

                                <a
                                    key={resource.title}
                                    href={resource.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="resource-card"
                                >

                                    <h4>
                                        📚 {resource.title}
                                    </h4>

                                    <span>
                                        Open Resource →
                                    </span>

                                </a>

                            ))}

                        </div>

                    </div>

                    <div className="detail-section">

                        <h3>
                            Practice Problems
                        </h3>

                        <div className="problem-list">

                            {roadmapData[selectedTopic]
                                .problems.map((problem) => (

                                <div
                                    key={problem.name}
                                    className="problem-card"
                                >

                                    <span
                                        className={
                                            `difficulty ${problem.difficulty.toLowerCase()}`
                                        }
                                    >
                                        {problem.difficulty}
                                    </span>

                                    <p>
                                        {problem.name}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default DSARoadmap;