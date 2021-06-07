const express = require("express");
const clientController = require("../controller/client");
const locationController = require("../controller/location");
const jobController = require("../controller/job");

const router = express.Router();

// client routes
router.post("/client", clientController.createClient);
router.get("/clients", clientController.getAllClients);
router.get("/client/:id", clientController.getClientById);
router.patch("/client/:id", clientController.updateClient);
router.delete("/client/:id", clientController.deleteClient);

//location routes
router.post("/location", locationController.createLocation);
router.get("/locations", locationController.getAllLocations);
router.get("/location/:id", locationController.getLocationById);
router.patch("/location/:id", locationController.updateLocation);
router.delete("/location/:id", locationController.deleteLocation);

// job routes
router.post("/job", jobController.createJob);
router.get("/jobs", jobController.getAllJobs);
router.get("/job/:id", jobController.getJobById);
router.patch("/job/:id", jobController.updateJob);
router.delete('/job/:id',jobController.deleteJob);
module.exports = router;
