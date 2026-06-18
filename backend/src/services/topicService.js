const axios = require("axios");

const getSubmissions = async (handle) => {
    const response = await axios.get(
        `https://codeforces.com/api/user.status?handle=${handle}`
    );
    console.log(response.data);
    return response.data;
};

module.exports = { getSubmissions };