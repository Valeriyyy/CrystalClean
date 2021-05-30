const db = require("../db/db");

class jobDAO {
  async createJob(clientId, locationId, price, tip, notes) {
    const job = await db("job")
      .insert({
        client: clientId,
        location: locationId,
        price,
        tip,
        notes,
      })
      .returning(["job_id", "created_at"]);

    return job;
  }

  async getAllJobs() {
    //const jobs = await db.select("*").from("job");

    const jobs = await db.raw(
      "select j.job_id id, j.price, (select coalesce(json_agg(clients), '{}'::json) " +
        "as client from (select name from client where client = client_id) as clients) " +
        "from job as j, client as c WHERE j.client = c.client_id"
    );
    return jobs.rows;
  }
}

module.exports = new jobDAO();
