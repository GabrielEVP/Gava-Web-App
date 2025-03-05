import { ClientRepository } from "../domain/repository/IClient.Respository";
import { Client } from "../domain/models/Client.Model";
export class FindAllClients {
    private readonly clientRepository: ClientRepository;

    constructor(clientRepository: ClientRepository) {
        this.clientRepository = clientRepository;
    }

    async execute(): Promise<Client[]> {
        return this.clientRepository.findAll();
    }
}