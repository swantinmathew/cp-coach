const compareAnalytics = (currentUser, compareUser) => {

    const comparison = {

        ratingDifference:
            compareUser.rating - currentUser.rating,

        contestDifference:
            compareUser.contestCount -
            currentUser.contestCount,

        consistencyDifference:
            compareUser.consistencyScore -
            currentUser.consistencyScore,

        topicGaps: [],

        commonStrengths: []

    };

    const allTopics = new Set([

        ...Object.keys(currentUser.topicFrequency),

        ...Object.keys(compareUser.topicFrequency)

    ]);

    allTopics.forEach((topic) => {

        const currentCount =
            currentUser.topicFrequency[topic] || 0;

        const compareCount =
            compareUser.topicFrequency[topic] || 0;

        const difference =
            compareCount - currentCount;

        comparison.topicGaps.push({

            topic,

            current: currentCount,

            opponent: compareCount,

            difference

        });

    });

    comparison.topicGaps.sort(

        (a, b) => b.difference - a.difference

    );

    comparison.biggestWeaknesses =

    comparison.topicGaps
        .filter(topic => topic.difference > 0)
        .slice(0,5);

    comparison.biggestStrengths =

    comparison.topicGaps
        .filter(topic => topic.difference < 0)
        .sort((a,b)=>a.difference-b.difference)
        .slice(0,5);


    comparison.commonStrengths =
        currentUser.topTopics
            .filter(current =>
                compareUser.topTopics.some(compare =>
                    compare.tag === current.tag
                )
            )
            .map(topic => topic.tag);

        return {

        ratingDifference:
            comparison.ratingDifference,

        contestDifference:
            comparison.contestDifference,

        consistencyDifference:
            comparison.consistencyDifference,

        commonStrengths:
            comparison.commonStrengths,

        biggestWeaknesses:
            comparison.biggestWeaknesses,

        biggestStrengths:
            comparison.biggestStrengths

    };

};

module.exports = {

    compareAnalytics

};