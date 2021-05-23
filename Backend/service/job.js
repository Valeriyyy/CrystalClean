const jobDAO = require("../dao/job");

class JobService {
  createJob(jobDto) {
    const { clientId, locationId, price, tip, notes } = jobDto;
    return jobDAO.createJob(clientId, locationId, price, tip, notes);
  }
}

module.exports = new JobService();
