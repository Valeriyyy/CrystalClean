const db = require("../db/db");

class ClientDAO {
  async createClient(name, phone, email, notes, rating) {
    const [id] = await db("client")
      .insert({
        name: name,
        phone: phone,
        email: email,
        notes: notes,
        rating: rating,
      })
      .returning("id");

    return id;
  }

  async getAllClients() {
    const clients = await db("client").select("*").from("client");

    return clients;
  }

  async getClientById(id) {
    const client = await db.select("*").from("client").where({ id: id });

    return client[0];
  }

  async updateClient(id, payload) {
    const client = await db("client")
      .where({ id: id })
      .update(payload)
      .returning([
        "id",
        "name",
        "phone",
        "email",
        "notes",
        "rating",
        "created_at",
        "updated_at",
      ]);

    return client;
  }

  async deleteClient(id) {
    const res = await db("client").where({ id: id }).del();

    return res;
  }
}

module.exports = new ClientDAO();
