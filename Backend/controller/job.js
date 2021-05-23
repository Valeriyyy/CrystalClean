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
}

module.exports = new JobController();