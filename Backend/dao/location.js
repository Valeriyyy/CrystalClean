const db = require("../db/db");

class LocationDAO {
  async createLocation(address, city, zip, state, unit, gateCode, notes) {
    const [id] = await db("location")
      .insert({
        address,
        city,
        zip,
        state,
        unit,
        gate_code: gateCode,
        notes,
      })
      .returning("id", "created_at");

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
      .returning(["id", "address"]);

    return location;
  }

  async deleteLocation(id) {
    const res = await db("location").where({ id: id }).del();

    return res;
  }
}

module.exports = new LocationDAO();
