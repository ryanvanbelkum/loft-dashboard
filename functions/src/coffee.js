import { preflight, response } from "./utils/utils"
import firebase from './utils/firebase';
import querystring from "querystring";

const firestore = firebase.firestore();

async function postNewTimestamp(type) {
  return firestore
    .collection("dashboard")
    .doc("coffee")
    .set({
      lastUpdateTimestamp: Date.now(),
      type
    })
    .then(e => console.log("success"))
    .catch(e => console.log("failure"))
}

exports.handler = async (event, context, callback) => {
  const params = querystring.parse(event.body);
  const type = params.text || "beans";

  console.log(type);

  if (event.httpMethod === 'OPTIONS') {
    preflight(callback);
  }

  if (event.httpMethod === 'POST') {
    await postNewTimestamp(type);

    return response({
      statusCode: 204,
      body: JSON.stringify({})
    })
  }

  return {
    statusCode: 405,
  }
};
