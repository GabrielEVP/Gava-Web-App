import { CreateClient, DeleteClient, FindAllClients, FindClientById, UpdateClient } from '../use-case/index'
import { Client } from "../domain/models/Client.Model";
import axios from "axios";

export class ClientApiAdapter {
    private createClient: CreateClient
    private deleteClient: DeleteClient
    private findAllClient: FindAllClients
    private findClientById: FindClientById
    private updateClient: UpdateClient
    private readonly apiUrl: string = 'localhost:80/api/clients'

    constructor(
        createClient: CreateClient,
        deleteClient: DeleteClient,
        findAllClients: FindAllClients,
        findClientById: FindClientById,
        updateClient: UpdateClient
    ) {
        this.createClient = createClient
        this.deleteClient = deleteClient
        this.findAllClient = findAllClients
        this.findClientById = findClientById
        this.updateClient = updateClient
    }

    async create(client: Client): Promise<Client> {
        try {
            const response = await axios.post(this.apiUrl, client)
            return this.createClient.execute(response.data)
        } catch (error) {
            throw new Error(`Error creating client: ${error}`)
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await axios.delete(`${this.apiUrl}/${id}`)
            return this.deleteClient.execute(id)
        } catch (error) {
            throw new Error(`Error deleting client with ID ${id}: ${error}`)
        }
    }

    async findAll(): Promise<Client[]> {
        try {
            const response = await axios.get(this.apiUrl)
            return response.data
        } catch (error) {
            throw new Error(`Error fetching clients: ${error}`)
        }
    }

    async findById(id: number): Promise<Client> {
        try {
            await axios.get(`${this.apiUrl}/${id}`)
            return this.findClientById.execute(id)
        } catch (error) {
            throw new Error(`Error fetching client with ID ${id}: ${error}`)
        }
    }

    async update(client: Client): Promise<Client> {
        try {
            const response = await axios.put(`${this.apiUrl}/${client.id}`, client)
            return this.updateClient.execute(response.data)
        } catch (error) {
            throw new Error(`Error updating client: ${error}`)
        }
    }
}
