import ClientRepository from "../domain/repository/IClient.Respository";
import Client from "../domain/models/Client.Model";

class CreateClient {
    private readonly clientRepository: ClientRepository;

    constructor(clientRepository: ClientRepository) {
        this.clientRepository = clientRepository;
    }

    async execute(client: Client): Promise<Client> {
        client.validateClient()
        return this.clientRepository.create(client);
    }
}

export default CreateClient

