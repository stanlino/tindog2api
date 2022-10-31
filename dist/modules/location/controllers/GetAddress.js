"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAdressController = void 0;
var _GetAddress = require("../useCases/GetAddress");
const getAdressUseCase = new _GetAddress.GetAdressUseCase();
class GetAdressController {
  async handle(request, response) {
    const {
      latitude,
      longitude
    } = request.body;
    const address = await getAdressUseCase.execute({
      latitude,
      longitude
    });
    return response.json(address);
  }
}
exports.GetAdressController = GetAdressController;