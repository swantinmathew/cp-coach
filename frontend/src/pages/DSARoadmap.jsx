import "./DSARoadmap.css";
import { useState } from "react";

function DSARoadmap() {

    const roadmapData = {

        Arrays: {
            description:
                "Learn traversal, prefix sums, two pointers and common array patterns.",

            levels: [
                {
                    title: "Level 1 - Fundamentals",
                    topics: [
                        "Array Traversal",
                        "Frequency Counting",
                        "Sorting Basics"
                    ]
                },
                {
                    title: "Level 2 - Intermediate",

                    topics: [
                        "Prefix Sum",
                        "Suffix Sum",
                        "Two Pointers"
                    ]
                },

                {
                    title: "Level 3 - Patterns",

                    topics: [
                        "Kadane's Algorithm",
                        "Sliding Window Basics"
                    ]
                },

                {
                    title: "Level 4 - Advanced",

                    topics: [
                        "Matrix Traversal",
                        "Binary Search On Arrays"
                    ]
                }

            ],

            resources: [

            {
                category: "Learn",
                title: "GeeksForGeeks Arrays"
            },

            {
                category: "Watch",
                title: "NeetCode Arrays"
            },

            {
                category: "Watch",
                title: "Abdul Bari Arrays"
            },

            {
                category: "Practice",
                title: "LeetCode Array Problems"
            }

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

            levels: [

                {
                    title: "Level 1 - Fundamentals",

                    topics: [
                        "String Basics",
                        "Character Arrays",
                        "String Traversal"
                    ]
                },

                {
                    title: "Level 2 - Intermediate",

                    topics: [
                        "Palindrome",
                        "Frequency Counting",
                        "String Comparison"
                    ]
                },

                {
                    title: "Level 3 - Patterns",

                    topics: [
                        "Pattern Matching",
                        "Sliding Window On Strings"
                    ]
                }

            ],

            resources: [

            {
                category: "Learn",
                title: "GFG Strings"
            },

            {
                category: "Watch",
                title: "NeetCode Strings"
            },

            {
                category: "Practice",
                title: "LeetCode String Problems"
            }

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
                "Understand HashMap and frequency counting techniques.",

            levels: [

                {
                    title: "Level 1 - Fundamentals",

                    topics: [
                        "HashMap",
                        "HashSet",
                        "Frequency Count"
                    ]
                },

                {
                    title: "Level 2 - Intermediate",

                    topics: [
                        "Count Frequencies",
                        "Unique Elements"
                    ]
                }

            ],

           resources: [

            {
                category: "Learn",
                title: "HashMap Fundamentals"
            },

            {
                category: "Watch",
                title: "Striver Hashing"
            },

            {
                category: "Practice",
                title: "Hashing Problems Sheet"
            }

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

            levels: [

            {
                title: "Level 1 - Fundamentals",

                topics: [
                    "Fixed Size Window",
                    "Window Sum",
                    "Maximum Average Subarray"
                ]
            },

            {
                title: "Level 2 - Intermediate",

                topics: [
                    "Variable Size Window",
                    "Longest Substring",
                    "Frequency Tracking"
                ]
            },

            {
                title: "Level 3 - Advanced",

                topics: [
                    "Minimum Window Substring",
                    "Sliding Window Optimization"
                ]
            }

            ],
            resources: [

            {
                category: "Learn",
                title: "Sliding Window Pattern Guide"
            },

            {
                category: "Watch",
                title: "NeetCode Sliding Window"
            },

            {
                category: "Watch",
                title: "Abdul Bari Sliding Window"
            },

            {
                category: "Practice",
                title: "LeetCode Sliding Window Problems"
            }

            ],

        problems:[
        {name:"Maximum Average Subarray",difficulty:"Easy"},
        {name:"Longest Substring Without Repeating Characters",difficulty:"Medium"},
        {name:"Minimum Window Substring",difficulty:"Hard"}
        ]    
        },

        "Linked Lists": {
            description:
                "Master pointers, reversal and fast-slow pointer techniques.",

            levels:[

            {
            title:"Level 1 - Fundamentals",

            topics:[
            "Traversal",
            "Insertion",
            "Deletion"
            ]
            },

            {
            title:"Level 2 - Intermediate",

            topics:[
            "Reverse Linked List",
            "Middle Of Linked List",
            "Fast Slow Pointers"
            ]
            },

            {
            title:"Level 3 - Advanced",

            topics:[
            "Cycle Detection",
            "Merge Linked Lists",
            "LRU Cache Basics"
            ]
            }

            ],
            resources: [

            {
                category: "Learn",
                title: "Linked List Fundamentals"
            },

            {
                category: "Watch",
                title: "NeetCode Linked Lists"
            },

            {
                category: "Watch",
                title: "Striver Linked Lists"
            },

            {
                category: "Practice",
                title: "Linked List Problems Sheet"
            }

            ],

            problems:[
            {name:"Reverse Linked List",difficulty:"Easy"},
            {name:"Middle Of Linked List",difficulty:"Easy"},
            {name:"Linked List Cycle",difficulty:"Medium"}
            ]
        },

        "Stack & Queue": {
            description:
                "Learn LIFO, FIFO and monotonic stack patterns.",

            levels:[

            {
            title:"Level 1 - Fundamentals",

            topics:[
            "Stack Operations",
            "Queue Operations",
            "Applications"
            ]
            },

            {
            title:"Level 2 - Intermediate",

            topics:[
            "Balanced Parentheses",
            "Monotonic Stack",
            "Circular Queue"
            ]
            },

            {
            title:"Level 3 - Advanced",

            topics:[
            "Next Greater Element",
            "Min Stack",
            "Deque"
            ]
            }

            ],
            resources: [

            {
                category: "Learn",
                title: "Stack And Queue Basics"
            },

            {
                category: "Watch",
                title: "NeetCode Stack & Queue"
            },

            {
                category: "Watch",
                title: "Abdul Bari Stack"
            },

            {
                category: "Practice",
                title: "Stack & Queue Problem Set"
            }

            ],
            problems:[
            {name:"Valid Parentheses",difficulty:"Easy"},
            {name:"Min Stack",difficulty:"Medium"},
            {name:"Daily Temperatures",difficulty:"Medium"}
            ]
        },

        "Binary Search": {
            description:
                "Learn searching on sorted arrays and answer-space searching.",

            levels:[

            {
            title:"Level 1 - Fundamentals",

            topics:[
            "Classic Binary Search",
            "Lower Bound",
            "Upper Bound"
            ]
            },

            {
            title:"Level 2 - Intermediate",

            topics:[
            "Search Insert Position",
            "First And Last Occurrence"
            ]
            },

            {
            title:"Level 3 - Advanced",

            topics:[
            "Binary Search On Answer",
            "Peak Element",
            "Rotated Arrays"
            ]
            }

            ],
            resources: [

            {
                category: "Learn",
                title: "Binary Search Fundamentals"
            },

            {
                category: "Watch",
                title: "NeetCode Binary Search"
            },

            {
                category: "Watch",
                title: "Striver Binary Search Playlist"
            },

            {
                category: "Practice",
                title: "Binary Search Problem Set"
            }

            ],
            problems:[
            {name:"Binary Search",difficulty:"Easy"},
            {name:"Search Insert Position",difficulty:"Easy"},
            {name:"Find Peak Element",difficulty:"Medium"}
            ]
        },

        Trees: {
            description:
                "Master DFS, BFS and recursive tree traversals.",

            levels:[

            {
            title:"Level 1 - Fundamentals",

            topics:[
            "Binary Tree",
            "DFS",
            "BFS",
            "Traversals"
            ]
            },

            {
            title:"Level 2 - Intermediate",

            topics:[
            "Height Of Tree",
            "Diameter",
            "Balanced Tree"
            ]
            },

            {
            title:"Level 3 - Advanced",

            topics:[
            "BST",
            "Lowest Common Ancestor",
            "Serialize Tree"
            ]
            }

            ],
            resources: [

            {
                category: "Learn",
                title: "Binary Trees Explained"
            },

            {
                category: "Watch",
                title: "NeetCode Trees"
            },

            {
                category: "Watch",
                title: "Abdul Bari Trees"
            },

            {
                category: "Practice",
                title: "Tree Problems Sheet"
            }

            ],

            problems:[
            {name:"Maximum Depth Of Binary Tree",difficulty:"Easy"},
            {name:"Balanced Binary Tree",difficulty:"Easy"},
            {name:"Lowest Common Ancestor",difficulty:"Medium"}
            ]   
        },

        Graphs: {
            description:
                "Learn traversal, shortest paths and graph representations.",

            levels:[

            {
            title:"Level 1 - Fundamentals",

            topics:[
            "Graph Representation",
            "BFS",
            "DFS"
            ]
            },

            {
            title:"Level 2 - Intermediate",

            topics:[
            "Connected Components",
            "Cycle Detection",
            "Topological Sort"
            ]
            },

            {
            title:"Level 3 - Advanced",

            topics:[
            "Dijkstra",
            "Minimum Spanning Tree",
            "Union Find"
            ]
            }

            ],
            resources: [
            {
                category: "Learn",
                title: "Graph Fundamentals"
            },

            {
                category: "Watch",
                title: "Striver Graph Series"
            },

            {
                category: "Watch",
                title: "William Fiset Graphs"
            },

            {
                category: "Practice",
                title: "Graph Problems Sheet"
            }

            ],

            problems:[
            {name:"Number Of Islands",difficulty:"Medium"},
            {name:"Clone Graph",difficulty:"Medium"},
            {name:"Course Schedule",difficulty:"Medium"}
            ]
        },

        "Dynamic Programming": {
            description:
                "Learn memoization, tabulation and state transitions.",

            levels:[

            {
            title:"Level 1 - Fundamentals",

            topics:[
            "Recursion",
            "Memoization",
            "Tabulation"
            ]
            },

            {
            title:"Level 2 - Intermediate",

            topics:[
            "Climbing Stairs",
            "House Robber",
            "Coin Change"
            ]
            },

            {
            title:"Level 3 - Advanced",

            topics:[
            "Longest Increasing Subsequence",
            "Knapsack",
            "DP On Trees"
            ]
            }

            ],
            resources: [

            {
                category: "Learn",
                title: "DP Introduction"
            },

            {
                category: "Watch",
                title: "NeetCode DP"
            },

            {
                category: "Watch",
                title: "Aditya Verma DP"
            },

            {
                category: "Practice",
                title: "DP Problems Sheet"
            }

            ],

            problems:[
            {name:"Climbing Stairs",difficulty:"Easy"},
            {name:"House Robber",difficulty:"Medium"},
            {name:"Coin Change",difficulty:"Medium"}
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
                            Learning Path
                        </h3>

                        <div className="levels-container">

                            {roadmapData[selectedTopic]
                                .levels.map((level) => (

                                <div
                                    key={level.title}
                                    className="level-card"
                                >

                                    <h4>
                                        {level.title}
                                    </h4>

                                    <ul>

                                        {level.topics.map((topic) => (

                                            <li key={topic}>
                                                {topic}
                                            </li>

                                        ))}

                                    </ul>

                                </div>

                            ))}

                        </div>

                    </div>
                    
                    <div className="detail-section">

                        <h3>
                            Resources
                        </h3>

                        <div className="resources-grid">

                            {roadmapData[selectedTopic]
                                .resources.map((resource) => (

                                <div
                                    key={resource.title}
                                    className="resource-card"
                                >

                                    <div className="resource-category">
                                        {resource.category}
                                    </div>

                                    <h4>
                                        {resource.title}
                                    </h4>

                                </div>

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