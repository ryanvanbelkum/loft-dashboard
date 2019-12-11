import humps from 'humps';
import fetch from 'node-fetch';
import {preflight, response} from "./utils/utils";

exports.handler = async (event, context, callback) => {
    if (event.httpMethod === 'OPTIONS') {
        preflight(callback);
    }

    const news = await fetch('https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=41f90b389f164017b9de66aed6468c0c')
      .then(res => res.json())
      .then(res => humps.camelizeKeys(res))

    return response({
        statusCode: 200,
        body: JSON.stringify(news),
    });
};
