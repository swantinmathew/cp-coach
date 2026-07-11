require("dotenv").config();
const express = require("express");
const cors = require("cors");
const profileRoutes = require("./src/routes/profileRoutes");
const contestRoutes = require("./src/routes/contestRoutes");
const topicRoutes = require("./src/routes/topicRoutes");
const weakTopicRoutes = require("./src/routes/weakTopicRouter");
const strongTopicRoutes = require("./src/routes/strongTopicRoutes");
const recommendationRoutes = require("./src/routes/recommendationRoutes");
const placementScoreRoutes = require("./src/routes/placementScoreRoutes");
const ratingRoutes = require("./src/routes/ratingRoutes");
const compareAIRoutes = require("./src/routes/compareAIRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/profile", profileRoutes);
app.use("/api/topic", topicRoutes);
app.use("/api/contest", contestRoutes);
app.use("/api/weak-topic", weakTopicRoutes);
app.use("/api/strong-topic", strongTopicRoutes);
app.use("/api/placement-score", placementScoreRoutes);
app.use("/api/recommendation",recommendationRoutes);
app.use("/api/rating-history",ratingRoutes);
app.use("/api/compare-ai",compareAIRoutes);
app.get("/", (req, res) => {
    res.send("CP Coach Backend Running");
});
app.listen(5000, () => {
    console.log("Server running on port 5000");
});