const axios = require('axios');
const baseUrl = "http://localhost:3000";

const createFood = async (food) => {
    let config = {
        method: 'post',
        url: baseUrl + '/foods?format=json',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            food: food
        }
    };
    try {
        let res = await axios(config);
        return [res.data, null];
    } catch (err) {
        return [null, err.response.data];
    }
}

const getFood = async () => {
    let config = {
        method: 'get',
        url: baseUrl + '/foods?format=json',
    };
    try {
        let res = await axios(config);
        return [res.data, null];
    } catch (err) {
        return [null, err.response.data];
    }
}

module.exports = {
    createFood,
    getFood,
}