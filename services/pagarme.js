const axios = require("axios");

const instanceAxios = axios.create({
    baseURL: "https://api.pagar.me/1/",
    params:{
        api_key: "ak_test_qRjc2viEfQsjrfsEGj9jqZjdL3lv1O"
    }
});

module.exports = instanceAxios;