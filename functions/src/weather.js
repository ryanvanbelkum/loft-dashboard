import humps from 'humps';
import fetch from 'node-fetch';
import { preflight, response } from "./utils/utils"

exports.handler = async (event, context, callback) => {
    if (event.httpMethod === 'OPTIONS') {
        preflight(callback);
    }

    const weather = await fetch('https://api.darksky.net/forecast/d8be2b19a521f77df55dfd0a103e3c9b/39.767450,-94.849930?exclude=daily,minutely,alerts,flags,hourly')
      .then(res => res.json())
      .then(res => humps.camelizeKeys(res))

    return response({
        statusCode: 200,
        body: JSON.stringify(weather),
    });
};
