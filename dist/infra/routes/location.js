"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locationRoutes = void 0;
var _express = require("express");
var _GetAddress = require("../../modules/location/controllers/GetAddress");
const locationRoutes = (0, _express.Router)();
exports.locationRoutes = locationRoutes;
const getAdressController = new _GetAddress.GetAdressController();
locationRoutes.post('/', getAdressController.handle);