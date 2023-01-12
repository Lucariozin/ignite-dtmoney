module.exports = (req, res, next) => {
  const { url, method } = req

  if (url !== '/transactions' || method !== 'POST') {
    return next()
  }

  req.body.createdAt = new Date()

  next()
}
