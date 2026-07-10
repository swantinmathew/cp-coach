const compareAnalytics = (currentUser, compareUser) => {

    const comparison = {

        ratingDifference:
            compareUser.rating - currentUser.rating,

        contestDifference:
            compareUser.contestCount - currentUser.contestCount,

        consistencyDifference:
            compareUser.consistencyScore -
            currentUser.consistencyScore,

        strongerTopics: [],

        weakerTopics: []

    };

    currentUser.topTopics.forEach((topic) => {

        const opponentTopic =
            compareUser.topTopics.find(
                t => t.tag === topic.tag
            );

        if (
            opponentTopic &&
            topic.count > opponentTopic.count
        ) {

            comparison.strongerTopics.push(topic.tag);

        }

    });

    currentUser.weakTopics.forEach((topic) => {

        comparison.weakerTopics.push(topic.tag);

    });

    return comparison;

};

module.exports = {

    compareAnalytics

};