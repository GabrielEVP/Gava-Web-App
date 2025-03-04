import ClientRepository from "../domain/repository/IClient.Respository";

export class DeleteClient {
    private readonly clientRepository: ClientRepository;

    constructor(clientRepository: ClientRepository) {
        this.clientRepository = clientRepository;
    }

    async execute(id: number): Promise<void> {
        await this.clientRepository.delete(id);
    }
}
