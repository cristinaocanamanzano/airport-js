"use strict";

function Plane(){}

Plane.prototype.land = function(airport) {
  airport.okToLand(this);
};
