import "./HowItWorks.css";

function HowItWorks() {

    const steps = [

        {
            number: "01",
            title: "Choose A Path",
            description:
                "Pick DSA, Placement Preparation or Competitive Programming."
        },

        {
            number: "02",
            title: "Follow The Roadmap",
            description:
                "Learn topics in a structured order with curated resources."
        },

        {
            number: "03",
            title: "Practice Problems",
            description:
                "Solve hand-picked problems and strengthen your concepts."
        },

        {
            number: "04",
            title: "Track Progress",
            description:
                "Monitor consistency and see how far you've come."
        },

        {
            number: "05",
            title: "Analyze Performance",
            description:
                "Connect Codeforces and LeetCode to discover strengths and weaknesses."
        },

        {
            number: "06",
            title: "Improve Continuously",
            description:
                "Use insights and recommendations to level up faster."
        }

    ];

    return (

        <section className="how-section">

            <div className="how-header">

                <span className="section-badge">
                    HOW IT WORKS
                </span>

                <h2>
                    A Simple Path To Growth
                </h2>

                <p>
                    Learn, practice, track and improve with
                    a structured workflow designed for students.
                </p>

            </div>

            <div className="timeline">

                {steps.map((step) => (

                    <div
                        key={step.number}
                        className="timeline-item"
                    >

                        <div className="timeline-number">
                            {step.number}
                        </div>

                        <div className="timeline-content">

                            <h3>
                                {step.title}
                            </h3>

                            <p>
                                {step.description}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default HowItWorks;