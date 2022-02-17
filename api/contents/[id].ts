import express from 'express'

const app = express()

// It is important that the full path is specified here
app.get('/api/contents', function (req, res) {
  const id = req.query.id
  res.json({ message: 'dynamic route', id })
})

export default app
