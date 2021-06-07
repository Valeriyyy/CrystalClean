const client = require("../dao/client");
const jobService = require("../service/job");

class JobController {
  async createJob(req, res) {
    try {
      const job = await jobService.createJob(req.body);
      res.status(200).json(job);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async getAllJobs(req, res) {
    try {
      const jobs = await jobService.getAllJobs();
      res.status(200).json(jobs);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async getJobById(req, res) {
    try {
      const job = await jobService.getJobById(req.params.id);
      res.status(200).json(job);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
}

module.exports = new JobController();
