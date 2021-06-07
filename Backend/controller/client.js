const clientService = require("../service/client");

class ClientController {
  async createClient(req, res) {
    try {
      const id = await clientService.createClient(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async getAllClients(req, res) {
    try {
      const clients = await clientService.getAllClients();
      res.status(200).json(clients);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async getClientById(req, res) {
    try {
      const client = await clientService.getClientById(req.params.id);
      if (client.length === 0) {
        res
          .status(404)
          .json({ message: `No client found with id: ${req.params.id}` });
      } else {
        res.status(200).json(client);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async updateClient(req, res) {
    try {
      const client = await clientService.updateClient(req.params.id, req.body);
      if (client.length === 0) {
        res
          .status(404)
          .json({ message: `No client found with id: ${req.params.id}` });
      } else {
        res.status(200).json(client);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async deleteClient(req, res) {
    try {
      const response = await clientService.deleteClient(req.params.id);
      if (response === 0) {
        res
          .status(404)
          .json({ message: `No client found with id: ${req.params.id}` });
      } else {
        res.status(204).json(response);
      }
    } catch (err) {
      console.err(err);
      res.status(500).json(err);
    }
  }
}

module.exports = new ClientController();
