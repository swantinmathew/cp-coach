const {
    compareAnalytics
} = require("../services/compareAnalyticsService");

const {
    getProfile
} = require("../services/codeforcesService");

const {
    getContestHistory
} = require("../services/contestService");

const {
    getSubmissions
} = require("../services/topicService");

const {
    buildAnalytics
} = require("../services/analyticsService");

const {
    generateComparisonSummary
} = require("../services/aiService");

const compareAI = async (req, res) => {

    try {

        const {

            currentHandle,

            compareHandle

        } = req.body;

        // ---------- Current User ----------

        const currentProfileData =
            await getProfile(currentHandle);

        const currentContestData =
            await getContestHistory(currentHandle);

        const currentSubmissionData =
            await getSubmissions(currentHandle);

        const currentAnalytics =
            buildAnalytics(

                currentProfileData.result[0],

                currentContestData.result,

                currentSubmissionData.result

            );

        // ---------- Compare User ----------

        const compareProfileData =
            await getProfile(compareHandle);

        const compareContestData =
            await getContestHistory(compareHandle);

        const compareSubmissionData =
            await getSubmissions(compareHandle);

        const compareUserAnalytics =
            buildAnalytics(

                compareProfileData.result[0],

                compareContestData.result,

                compareSubmissionData.result

            );
        const comparison =
            compareAnalytics(
                currentAnalytics,
                compareUserAnalytics
            ); 
            
        const aiSummary =
        await generateComparisonSummary(

            currentAnalytics,

            compareUserAnalytics,

            comparison

        );    

        res.json({

            currentUser: currentAnalytics,

            compareUser: compareUserAnalytics,

            comparison,

            aiSummary

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            error: err.message

        });

    }

};

module.exports = {

    compareAI

};