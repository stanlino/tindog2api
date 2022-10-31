import { AppError } from '@errors/AppError'
import { Client } from '@googlemaps/google-maps-services-js'

import { IAddressDTO } from '../dtos/IAddress'

interface IRequest {
  latitude: number
  longitude: number
}

export class GetAdressUseCase {
  async execute({ latitude, longitude }: IRequest): Promise<IAddressDTO> {
    if (!latitude || !longitude)
      throw new AppError('Missing latitude or longitude')

    const client = new Client()

    const { data, status } = await client.reverseGeocode({
      params: {
        latlng: {
          latitude,
          longitude,
        },
        key: process.env.GEOLOCATION_API_KEY,
      },
    })

    if (status !== 200)
      throw new AppError('Bad request for geolocation api', status)

    if (data.status !== 'OK') throw new AppError(data.status)

    const { address_components } = data.results[0]

    const addressTypes = [
      'country',
      'administrative_area_level_1',
      'administrative_area_level_2',
    ]

    const [city, state, country] = address_components.filter(addr => {
      const hasProperty = addr.types.find(type => addressTypes.includes(type))

      if (hasProperty) return addr
      else return null
    })

    return {
      city: city.long_name,
      state: state.long_name,
      country: country.long_name,
    }
  }
}
