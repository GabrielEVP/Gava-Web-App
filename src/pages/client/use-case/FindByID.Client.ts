import ClientRepository from "../domain/repository/IClient.Respository";
import Client from "../domain/models/Client.Model";

export class FindClientById {
    private readonly clientRepository: ClientRepository;

    constructor(clientRepository: ClientRepository) {
        this.clientRepository = clientRepository;
    }

    async execute(id: number): Promise<Client | null> {
        return this.clientRepository.findById(id);
    }
}
