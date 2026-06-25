import "./DSARoadmap.css";
import { useState } from "react";

function PlacementRoadmap() {

    const roadmapData = {

        Projects: {

            description:
                "Build projects that showcase your skills to recruiters.",

            levels: [

                {
                    title: "Level 1 - Frontend",

                    topics: [
                        "HTML",
                        "CSS",
                        "JavaScript"
                    ]
                },

                {
                    title: "Level 2 - React",

                    topics: [
                        "Components",
                        "Hooks",
                        "Routing"
                    ]
                },

                {
                    title: "Level 3 - Full Stack",

                    topics: [
                        "Node.js",
                        "Databases",
                        "Authentication"
                    ]
                }

            ],

            resources: [
                {
                    category:"Learn",
                    title:"Frontend Roadmap"
                },
                {
                    category:"Practice",
                    title:"Build Portfolio Website"
                }
            ],

            problems: [
                {
                    name:"Portfolio Website",
                    difficulty:"Easy"
                },
                {
                    name:"Full Stack Project",
                    difficulty:"Medium"
                }
            ]

        },

        DBMS: {

            description:
                "Master database concepts frequently asked in interviews.",

            levels:[

                {
                    title:"Level 1 - Fundamentals",

                    topics:[
                        "ER Model",
                        "Relational Model",
                        "Keys"
                    ]
                },

                {
                    title:"Level 2 - SQL",

                    topics:[
                        "Joins",
                        "Nested Queries",
                        "Aggregation"
                    ]
                },

                {
                    title:"Level 3 - Advanced",

                    topics:[
                        "Normalization",
                        "Transactions",
                        "Indexing"
                    ]
                }

            ],

            resources:[
                {
                    category:"Watch",
                    title:"Gate Smashers DBMS"
                },
                {
                    category:"Practice",
                    title:"SQL Practice Problems"
                }
            ],

            problems:[
                {
                    name:"SQL Interview Questions",
                    difficulty:"Medium"
                }
            ]

        },

        "Operating Systems": {

            description:
                "Understand process management, memory and deadlocks.",

            levels:[

                {
                    title:"Level 1 - Processes",

                    topics:[
                        "Processes",
                        "Threads",
                        "CPU Scheduling"
                    ]
                },

                {
                    title:"Level 2 - Synchronization",

                    topics:[
                        "Mutex",
                        "Semaphore",
                        "Deadlocks"
                    ]
                },

                {
                    title:"Level 3 - Memory",

                    topics:[
                        "Paging",
                        "Virtual Memory",
                        "Page Replacement"
                    ]
                }

            ],

            resources:[
                {
                    category:"Watch",
                    title:"Gate Smashers OS"
                }
            ],

            problems:[
                {
                    name:"OS Interview Questions",
                    difficulty:"Medium"
                }
            ]

        },

        "Computer Networks": {

            description:
                "Learn networking concepts commonly asked in interviews.",

            levels:[

                {
                    title:"Level 1 - Basics",

                    topics:[
                        "OSI Model",
                        "TCP/IP",
                        "IP Addressing"
                    ]
                },

                {
                    title:"Level 2 - Protocols",

                    topics:[
                        "TCP",
                        "UDP",
                        "HTTP"
                    ]
                },

                {
                    title:"Level 3 - Advanced",

                    topics:[
                        "DNS",
                        "Routing",
                        "Congestion Control"
                    ]
                }

            ],

            resources:[
                {
                    category:"Watch",
                    title:"Gate Smashers CN"
                }
            ],

            problems:[
                {
                    name:"CN Interview Questions",
                    difficulty:"Medium"
                }
            ]

        },

        OOP: {

            description:
                "Master object oriented programming concepts.",

            levels:[

                {
                    title:"Level 1",

                    topics:[
                        "Classes",
                        "Objects",
                        "Constructors"
                    ]
                },

                {
                    title:"Level 2",

                    topics:[
                        "Inheritance",
                        "Polymorphism",
                        "Abstraction"
                    ]
                },

                {
                    title:"Level 3",

                    topics:[
                        "SOLID Principles",
                        "Design Basics"
                    ]
                }

            ],

            resources:[
                {
                    category:"Watch",
                    title:"Java OOP Concepts"
                }
            ],

            problems:[
                {
                    name:"OOP Interview Questions",
                    difficulty:"Easy"
                }
            ]

        },

        Resume: {

            description:
                "Create a resume that gets shortlisted.",

            levels:[

                {
                    title:"Level 1",

                    topics:[
                        "Education",
                        "Skills",
                        "Projects"
                    ]
                },

                {
                    title:"Level 2",

                    topics:[
                        "Achievements",
                        "Leadership",
                        "Formatting"
                    ]
                }

            ],

            resources:[
                {
                    category:"Learn",
                    title:"Resume Checklist"
                }
            ],

            problems:[
                {
                    name:"Build One Page Resume",
                    difficulty:"Easy"
                }
            ]

        },

        Aptitude: {

            description:
                "Prepare for placement aptitude rounds.",

            levels:[

                {
                    title:"Quantitative",

                    topics:[
                        "Percentages",
                        "Profit & Loss",
                        "Time & Work"
                    ]
                },

                {
                    title:"Logical",

                    topics:[
                        "Puzzles",
                        "Seating Arrangement"
                    ]
                }

            ],

            resources:[
                {
                    category:"Practice",
                    title:"IndiaBix Aptitude"
                }
            ],

            problems:[
                {
                    name:"Mock Aptitude Test",
                    difficulty:"Medium"
                }
            ]

        },

        Interviews: {

            description:
                "Prepare for technical and HR interviews.",

            levels:[

                {
                    title:"Technical",

                    topics:[
                        "Projects",
                        "Core CS",
                        "Coding Round"
                    ]
                },

                {
                    title:"HR",

                    topics:[
                        "Tell Me About Yourself",
                        "Strengths",
                        "Career Goals"
                    ]
                }

            ],

            resources:[
                {
                    category:"Learn",
                    title:"Interview Preparation Guide"
                }
            ],

            problems:[
                {
                    name:"Mock Interview",
                    difficulty:"Medium"
                }
            ]

        }

    };

    const [selectedTopic, setSelectedTopic] =
        useState("Projects");

    return (

        <div className="roadmap-page">

            <div className="roadmap-header">

                <h1>
                    Placement Roadmap
                </h1>

                <p>
                    Follow a structured path and
                    prepare for placements with
                    projects, core subjects and
                    interview preparation.
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

export default PlacementRoadmap;