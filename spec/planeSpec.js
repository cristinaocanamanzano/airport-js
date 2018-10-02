'use strict';

describe('Plane',function(){
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['okToLand','okToTakeoff']);
  });
  it('can land at an airport', function(){
    plane.land(airport);
    expect(airport.okToLand).toHaveBeenCalledWith(plane);
  });
  it('can takeoff from an airport', function(){
    plane.land(airport);
    plane.takeoff(airport);
    expect(airport.okToTakeoff).toHaveBeenCalledWith(plane);
  });
});
