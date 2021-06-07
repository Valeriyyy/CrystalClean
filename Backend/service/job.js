const jobDAO = require("../dao/job");

class JobService {
  createJob(jobDto) {
    const { clientId, locationId, price, startDate, endDate, notes } = jobDto;
    return jobDAO.createJob(
      clientId,
      locationId,
      price,
      startDate,
      endDate,
      notes
    );
  }

  getAllJobs() {
    return jobDAO.getAllJobs();
  }

  getJobById(jobDto) {
    return jobDAO.getJobById(jobDto);
  }

  updateJob(id, jobDto) {
    return jobDAO.updateJob(id, jobDto);
  }

  deleteJob(jobDto) {
    return jobDAO.deleteJob(jobDto);
  }
}

module.exports = new JobService();
