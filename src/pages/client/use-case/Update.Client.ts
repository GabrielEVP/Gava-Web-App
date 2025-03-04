import ClientRepository from "../domain/repository/IClient.Respository";
import Client from "../domain/models/Client.Model";

export class UpdateClient {
    private readonly clientRepository: ClientRepository;

    constructor(clientRepository: ClientRepository) {
        this.clientRepository = clientRepository;
    }

    async execute(client: Client): Promise<Client> {
        client.validateClient()
        return this.clientRepository.update(client);
    }
}
