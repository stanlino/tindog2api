"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;
var _express = require("express");
var _location = require("./location");
const router = (0, _express.Router)();
exports.router = router;
router.use('/location', _location.locationRoutes);