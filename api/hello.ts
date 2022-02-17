import express from 'express'

const app = express()

// It is important that the full path is specified here
app.get('/', function (_, res) {
  res.status(200).json({ message: 'This is hello message' })
})

export default app
