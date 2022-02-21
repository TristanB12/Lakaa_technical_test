const axios = require('axios');
const baseUrl = "http://localhost:3000";

const createIndicator = async (indicator) => {
    let config = {
        method: 'post',
        url: baseUrl + '/indicators?format=json',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            indicator: indicator
        }
    };
    try {
        let res = await axios(config);
        return [res.data, null];
    } catch (err) {
        return [null, err.response.data];
    }
}

const getIndicator = async () => {
    let config = {
        method: 'get',
        url: baseUrl + '/indicators?format=json',
    };
    try {
        let res = await axios(config);
        return [res.data, null];
    } catch (err) {
        return [null, err.response.data];
    }
}

const deleteIndicator = async (indicatorId) => {
    let config = {
        method: 'delete',
        url: baseUrl + `/indicators/${indicatorId}?format=json`,
    };
    try {
        let res = await axios(config);
        return [res, null];
    } catch (err) {
        return [null, err.response.data];
    }
}

module.exports = {
    createIndicator,
    getIndicator,
    deleteIndicator
}