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
}

module.exports = new jobDAO();
