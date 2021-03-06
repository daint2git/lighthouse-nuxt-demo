import express from 'express'

const app = express()

// It is important that the full path is specified here
app.get('/api/hello', function (_, res) {
  res.json({ message: 'This is hello message' })
})

export default app
