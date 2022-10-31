import { Router } from 'express'

import { GetAdressController } from '@modules/location/controllers/GetAddress'

const locationRoutes = Router()

const getAdressController = new GetAdressController()

locationRoutes.post('/', getAdressController.handle)

export { locationRoutes }
