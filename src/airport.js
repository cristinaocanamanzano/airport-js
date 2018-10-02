"use strict";

function Airport(){
  this.landedPlanes = [];
}

Airport.prototype.planes = function(){
  return this.landedPlanes;
};

Airport.prototype.okToLand = function(plane){
  this.landedPlanes.push(plane);
};
