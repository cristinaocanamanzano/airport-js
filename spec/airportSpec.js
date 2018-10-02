"use strict";

describe('Airport',function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',['land']);
  });

  it('does not have planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('stores a plane when it is ok to land', function(){
    airport.okToLand(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('removes plane from landed planes when it is ok to take off', function(){
    airport.okToLand(plane);
    airport.okToTakeoff(plane);
    expect(airport.planes()).toEqual([]);
  });
});
