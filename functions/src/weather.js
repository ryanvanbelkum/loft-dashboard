import humps from 'humps';
import fetch from 'node-fetch';

exports.handler = async (event, context, callback) => {
    const weather = await fetch('https://api.darksky.net/forecast/d8be2b19a521f77df55dfd0a103e3c9b/39.767450,-94.849930?exclude=daily,minutely,alerts,flags,hourly')
      .then(res => res.json())
      .then(res => humps.camelizeKeys(res))

    return {
        statusCode: 200,
        body: JSON.stringify(weather),
    };
};
