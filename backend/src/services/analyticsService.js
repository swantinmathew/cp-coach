const buildAnalytics = (profile, contests, submissions) => {

    const topicFrequency = {};

    const ignoredTags = [

        "*special",

        "*broken",

        "communication",

        "schedules"

    ];

    submissions.forEach((submission) => {

        if (!submission.problem?.tags) return;

        submission.problem.tags.forEach((tag) => {

            if (ignoredTags.includes(tag))
                return;

            topicFrequency[tag] =
                (topicFrequency[tag] || 0) + 1;

        });

    });

    const contestCount = contests.length;

    const solvedProblems = submissions.filter(

        submission => submission.verdict === "OK"

    ).length;

    const accepted = submissions.filter(

        submission => submission.verdict === "OK"

    ).length;

    const totalSubmissions = submissions.length;

    const successRate =

    Math.round(

        (accepted / totalSubmissions) * 100

    );

    let improvementTrend = "Stable";

    let averageRatingGain = 0;

    if (contestCount > 1) {

        averageRatingGain = Math.round(

            (

                contests[contestCount - 1].newRating -

                contests[0].oldRating

            )

            /

            contestCount

        );

    }

    if (contestCount > 1) {

        const first = contests[0].newRating;
        const last = contests[contestCount - 1].newRating;

        if (last > first)
            improvementTrend = "Positive";

        else if (last < first)
            improvementTrend = "Negative";

    }

    const consistencyScore = Math.min(
        100,
        Math.round(contestCount / 2)
    );

    const sortedTopics = Object.entries(topicFrequency)
        .sort((a, b) => b[1] - a[1]);

    const topTopics = sortedTopics
        .slice(0, 5)
        .map(([tag, count]) => ({
            tag,
            count
        }));

    const weakTopics = sortedTopics
        .slice(-5)
        .map(([tag, count]) => ({
            tag,
            count
        }));

        const favouriteTopic =

        topTopics.length > 0

        ?

        topTopics[0].tag

        :

        "None";

    return {

        handle: profile.handle,

        rating: profile.rating,

        maxRating: profile.maxRating,

        rank: profile.rank,

        contribution: profile.contribution,

        contestCount,

        solvedProblems,

        successRate,

        averageRatingGain,

        favouriteTopic,

        improvementTrend,

        consistencyScore,

        topicFrequency,

        topTopics,

        weakTopics

    };

};

module.exports = {

    buildAnalytics

};