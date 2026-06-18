const axios = require("axios");

const cache = new Map();

const getSubmissions = async (handle) => {

    if (cache.has(handle)) {
        console.log("Using cache");
        return cache.get(handle);
    }

    const response = await axios.get(
        `https://codeforces.com/api/user.status?handle=${handle}`
    );

    cache.set(handle, response.data);

    return response.data;
};

module.exports = { getSubmissions };