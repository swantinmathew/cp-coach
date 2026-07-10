const buildAnalytics = (profile, contests, submissions) => {

    const topicFrequency = {};

    submissions.forEach((submission) => {

        if (!submission.problem?.tags) return;

        submission.problem.tags.forEach((tag) => {

            topicFrequency[tag] =
                (topicFrequency[tag] || 0) + 1;

        });

    });

    const contestCount = contests.length;

    let improvementTrend = "Stable";

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

    return {

        handle: profile.handle,
        rating: profile.rating,
        maxRating: profile.maxRating,
        rank: profile.rank,
        contribution: profile.contribution,
        contestCount,
        improvementTrend,
        consistencyScore,
        topTopics,
        weakTopics

    };

};

module.exports = {

    buildAnalytics

};