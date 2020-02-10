exports.handler = function (event) {
  const subject = event.queryStringParameters || 'World'
  return {
    statusCode: 200,
    body: `Hello ${subject}`
  }
}
