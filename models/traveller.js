const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((location) => {
    return location.startLocation
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
    return this.journeys.map((location) =>{
      return location.endLocation
    })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((location) =>{
    return location.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((location) =>{
    return location.distance >= minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, travel) => {
    return total += travel.distance
  },0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.filter((journey) =>{
    return journey.transport
  });
};


module.exports = Traveller;
