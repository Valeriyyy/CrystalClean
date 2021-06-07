const locationDAO = require("../dao/location");

class locationService {
  createLocation(locationDto) {
    const { address, city, zip, state, unit, gateCode, notes } = locationDto;
    return locationDAO.createLocation(
      address,
      city,
      zip,
      state,
      unit,
      gateCode,
      notes
    );
  }

  getAllLocations() {
    return locationDAO.getAllLocations();
  }

  getLocationById(locationDto) {
    return locationDAO.getLocationById(locationDto);
  }

  updateLocation(id, locationDto) {
    return locationDAO.updateLocation(id, locationDto);
  }

  deleteLocation(locationDto) {
    return locationDAO.deleteLocation(locationDto);
  }
}

module.exports = new locationService();
