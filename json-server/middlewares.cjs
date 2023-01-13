const middlewares = {
  '/transactions': ({ req, next }) => {
    const { method } = req

    if (method !== 'POST') return next()

    req.body.createdAt = new Date()

    next()
  },
  '/summary': async ({ res }) => {
    const response = await fetch('http://localhost:3001/transactions')
    const transactions = await response.json()

    const summary = transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.incomes += transaction.value
          acc.total += transaction.value
        }

        if (transaction.type === 'outcome') {
          acc.outcomes += transaction.value
          acc.total -= transaction.value
        }

        return acc
      },
      {
        incomes: 0,
        outcomes: 0,
        total: 0,
      },
    )

    res.send(summary)
  },
}

module.exports = (req, res, next) => {
  const { url } = req

  const middlewareFunction = middlewares[url]

  if (!middlewareFunction) return next()

  middlewareFunction({ req, res, next })
}
