const db = require("../db/db");
const allColumns = [
  "id",
  "client",
  "location",
  "order_number",
  "status",
  "estimated_price",
  "total_price",
  "tip",
  "notes",
  "start_at",
  "end_at",
  "paid_at",
  "payment_method",
  "created_at",
  "updated_at",
];

class jobDAO {
  async createJob(clientId, locationId, price, startDate, endDate, notes) {
    const job = await db("job")
      .insert({
        client: clientId,
        location: locationId,
        estimated_price: price,
        start_at: startDate,
        end_at: endDate,
        notes,
      })
      .returning(allColumns);

    return job;
  }

  async getAllJobs() {
    //const jobs = await db.select("*").from("job");

    // const jobs = await db.raw(
    //   "select j.job_id id, j.price, (select coalesce(json_agg(clients), '{}'::json) " +
    //     "as client from (select name from client where client = client_id) as clients) " +
    //     "from job as j, client as c WHERE j.client = c.client_id"
    // );

    const jobs = await db.raw(
      "select json_agg(row_to_json(jobs)) " +
        "from (" +
        "select *, (" +
        'select row_to_json("c") from client c where job.client = c.id' +
        ") as client, (" +
        'select row_to_json("l") from location l where job.location = l.id' +
        ") as location " +
        "from job" +
        ") jobs"
    );

    return jobs.rows[0].json_agg;
  }

  async getJobById(id) {
    const job = await db.raw(
      `select json_agg(row_to_json(jobs))
        from (
        select *, (
        select row_to_json("c") from client c where job.client = c.id
        ) as client, (
        select row_to_json("l") from location l where job.location = l.id
        ) as location
        from job where job.id = '${id}'
        ) jobs`
    );
    return job.rows[0].json_agg;
  }

  async updateJob(id, payload) {
    const job = await db("job")
      .where({ id: id })
      .update(payload)
      .returning(allColumns);

    return job;
  }

  async deleteJob(id) {
    const res = await db("job").where({ id: id }).del();

    return res;
  }
}

module.exports = new jobDAO();
