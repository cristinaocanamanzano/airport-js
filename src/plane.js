"use strict";

function Plane(){}

Plane.prototype.land = function(airport) {
  airport.okToLand(this);
};

Plane.prototype.takeoff = function(airport) {
  airport.okToTakeoff(this);
}
