"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAdressUseCase = void 0;
var _AppError = require("../../../errors/AppError");
var _googleMapsServicesJs = require("@googlemaps/google-maps-services-js");
class GetAdressUseCase {
  async execute({
    latitude,
    longitude
  }) {
    if (!latitude || !longitude) throw new _AppError.AppError('Missing latitude or longitude');
    const client = new _googleMapsServicesJs.Client();
    const {
      data,
      status
    } = await client.reverseGeocode({
      params: {
        latlng: {
          latitude,
          longitude
        },
        key: process.env.GEOLOCATION_API_KEY
      }
    });
    if (status !== 200) throw new _AppError.AppError('Bad request for geolocation api', status);
    if (data.status !== 'OK') throw new _AppError.AppError(data.status);
    const {
      address_components
    } = data.results[0];
    const addressTypes = ['country', 'administrative_area_level_1', 'administrative_area_level_2'];
    const [city, state, country] = address_components.filter(addr => {
      const hasProperty = addr.types.find(type => addressTypes.includes(type));
      if (hasProperty) return addr;else return null;
    });
    return {
      city: city.long_name,
      state: state.long_name,
      country: country.long_name
    };
  }
}
exports.GetAdressUseCase = GetAdressUseCase;