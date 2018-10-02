"use strict"

describe('Feature tests:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('plane can land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});
