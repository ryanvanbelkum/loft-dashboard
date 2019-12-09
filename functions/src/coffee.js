import faunadb from "faunadb";
import {preflight, response} from "./utils"

const q = faunadb.query;
const client = new faunadb.Client({
  secret: 'fnADfLtcy6ACE7aPiF1iVBleuJ3iXc6z82OPjZfm'
});

async function fetchCoffee() {
  const helper = await client.query(q.Paginate(q.Match(q.Index('all_coffee'))));
  return await client.query(helper.data.map((ref) => q.Get(ref)));
}

async function postNewTimestamp() {
  const ts = Date.now();
  const ref =  await client.query(q.Paginate(q.Match(q.Index('all_coffee'))));
  return client.query(q.Update(q.Ref(ref.data[0]), {data: {lastMadeTimestamp: ts}}))
}

exports.handler = async (event, action, callback) => {
  if (event.httpMethod === 'OPTIONS') {
    preflight(callback);
  }

  if (event.httpMethod === 'GET') {
    const coffee = await fetchCoffee();

    return response({
      statusCode: 200,
      body: JSON.stringify(coffee[0].data)
    })
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
