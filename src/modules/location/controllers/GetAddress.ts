import { Request, Response } from 'express'

import { GetAdressUseCase } from '../useCases/GetAddress'

const getAdressUseCase = new GetAdressUseCase()

export class GetAdressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { latitude, longitude } = request.body

    const address = await getAdressUseCase.execute({ latitude, longitude })

    return response.json(address)
  }
}
