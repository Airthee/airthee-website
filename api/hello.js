module.exports = (req, res) => {
  res.json({
    body: req.body || 'Hello world',
    query: req.query,
    cookies: req.cookies
  })
}
