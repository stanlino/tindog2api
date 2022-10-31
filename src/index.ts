import { app } from './infra/app'

app.listen(process.env.PORT || 3333, () => {
  console.log('🚀 App is running on http://localhost:3333')
})
