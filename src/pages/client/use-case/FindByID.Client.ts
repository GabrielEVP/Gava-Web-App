import { ClientRepository } from "../domain/repository/IClient.Respository";
import { Client } from "../domain/models/Client.Model";

export class FindClientById {
    private readonly clientRepository: ClientRepository;

    constructor(clientRepository: ClientRepository) {
        this.clientRepository = clientRepository;
    }

    async execute(id: number): Promise<Client> {
        const client = await this.clientRepository.findById(id);
        if (client === null) {
            throw new Error(`Client with ID ${id} not found`);
        }
        return client;
    }
}