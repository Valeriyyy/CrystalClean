const db = require("../db/db");

class ClientDAO {
  async createClient(name, phone, email, notes) {
    const [id] = await db("client")
      .insert({
        name: name,
        phone: phone,
        email: email,
        notes: notes,
      })
      .returning("client_id");

    return id;
  }

  async getAllClients() {
    const clients = await db("client").select("*").from("client");

    return clients;
  }

  async getClientById(id) {
    const client = await db.select("*").from("client").where({ client_id: id });

    return client[0];
  }

  async updateClient(id, payload) {
    const client = await db("client")
      .where({ client_id: id })
      .update(payload)
      .returning([
        "client_id",
        "name",
        "phone",
        "email",
        "notes",
        "created_at",
      ]);

    return client;
  }

  async deleteClient(id) {
    const res = await db("client").where({ client_id: id }).del();

    return res;
  }
}

module.exports = new ClientDAO();
