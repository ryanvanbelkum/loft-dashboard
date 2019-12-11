import { preflight, response } from "./utils/utils"
import firebase from './utils/firebase';

const firestore = firebase.firestore();

async function postNewTimestamp() {
  return firestore
    .collection("dashboard")
    .doc("coffee")
    .set({
      lastUpdateTimestamp: Date.now()
    })
    .then(e => console.log("success"))
    .catch(e => console.log("failure"))
}

exports.handler = async (event, action, callback) => {
  if (event.httpMethod === 'OPTIONS') {
    preflight(callback);
  }

  if (event.httpMethod === 'POST') {
    await postNewTimestamp();

    return response({
      statusCode: 204,
      body: JSON.stringify({})
    })
  }

  return {
    statusCode: 405,
  }
};
