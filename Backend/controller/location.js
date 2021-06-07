const locationService = require("../service/location");

class LocationController {
  async createLocation(req, res) {
    try {
      const id = await locationService.createLocation(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async getAllLocations(req, res) {
    try {
      const locations = await locationService.getAllLocations();
      res.status(200).json(locations);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async getLocationById(req, res) {
    try {
      const location = await locationService.getLocationById(req.params.id);
      if (location.length === 0) {
        res
          .status(404)
          .json({ message: `No location found with id: ${req.params.id}` });
      } else {
        res.status(200).json(location);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async updateLocation(req, res) {
    try {
      const location = await locationService.updateLocation(
        req.params.id,
        req.body
      );
      if (location.length === 0) {
        res
          .status(404)
          .json({ message: `No location found with id: ${req.params.id}` });
      } else {
        res.status(200).json(location);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async deleteLocation(req, res) {
    try {
      const response = await locationService.deleteLocation(req.params.id);
      if (response === 0) {
        res
          .status(404)
          .json({ message: `No location found with id: ${req.params.id}` });
      } else {
        res.status(204).json(response);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
}

module.exports = new LocationController();
