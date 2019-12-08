export function preflight() {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Authorization, Content-type',
    },
    body: JSON.stringify({}),
  };
}

export function response(rsp) {
  return {
    ...rsp,
    headers: {
      ...rsp.headers,
      'Access-Control-Allow-Origin': '*',
    }
  };
}
