const clientDAO = require("../dao/client");

class ClientService {
  createClient(clientDto) {
    const { name, phone, email, notes } = clientDto;
    return clientDAO.createClient(name, phone, email, notes);
  }

  getAllClients() {
    return clientDAO.getAllClients();
  }

  getClientById(clientDto) {
    return clientDAO.getClientById(clientDto);
  }

  updateClient(id, clientDto) {
    return clientDAO.updateClient(id, clientDto);
  }

  deleteClient(clientDto) {
    return clientDAO.deleteClient(clientDto);
  }
}

module.exports = new ClientService();
