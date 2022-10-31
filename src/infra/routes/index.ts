import { Router } from 'express'

import { locationRoutes } from './location'

const router = Router()

router.use('/location', locationRoutes)

export { router }
