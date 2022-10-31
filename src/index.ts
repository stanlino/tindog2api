import express from 'express'

import 'express-async-errors'

const app = express()

app.get('/', (request, response) => {
  response.json({
    name: 'tindog2API',
  })
})

app.use((err, req, res, next) => {
  console.log(err)
})

app.listen(process.env.PORT || 3333, () => {
  console.log('🚀 App is running on http://localhost:3333')
})
