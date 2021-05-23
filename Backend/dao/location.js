const db = require("../db/db");

class LocationDAO {
  async createLocation(address, city, zip, state, suite, gateCode, notes) {
    const [id] = await db("location")
      .insert({
        address,
        city,
        zip,
        state,
        suite,
        gate_code: gateCode,
        notes,
      })
      .returning("location_id", "created_at");

    return id;
  }

  async getAllLocations() {
    const locations = await db("location").select("*").from("location");

    return locations;
  }

  async getLocationById(id) {
    const locations = await db
      .select("*")
      .from("location")
      .where({ location_id: id });

    return locations;
  }

  async updateLocation(id, payload) {
    const location = await db("location")
      .where({ location_id: id })
      .update(payload)
      .returning(["location_id", "address"]);

    return location;
  }

  async deleteLocation(id) {
    const res = await db("location").where({ location_id: id }).del();

    return res;
  }
}

module.exports = new LocationDAO();
