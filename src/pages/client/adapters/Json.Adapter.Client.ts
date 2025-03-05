import { CreateClient, DeleteClient, FindAllClients, FindClientById, UpdateClient } from '../use-case/index'
import { Client } from "../domain/models/Client.Model";
import fs from "fs/promises";
import path from "path";

export class ClientJsonAdapter {
    private createClient: CreateClient
    private deleteClient: DeleteClient
    private findAllClient: FindAllClients
    private findClientById: FindClientById
    private updateClient: UpdateClient
    private readonly jsonFilePath: string = path.join(__dirname, 'clients.json')

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

    private async readClientsFromFile(): Promise<Client[]> {
        try {
            const data = await fs.readFile(this.jsonFilePath, 'utf-8')
            return JSON.parse(data)
        } catch (error) {
            throw new Error(`Error writing to file: ${error}`)
        }
    }

    private async writeClientsToFile(clients: Client[]): Promise<void> {
        try {
            await fs.writeFile(this.jsonFilePath, JSON.stringify(clients, null, 2))
        } catch (error) {
            throw new Error(`Error writing to file: ${error}`)
        }
    }

    async create(client: Client): Promise<Client> {
        try {
            const clients = await this.readClientsFromFile()
            clients.push(client)
            await this.writeClientsToFile(clients)
            return this.createClient.execute(client) // Llamamos al caso de uso de crear cliente
        } catch (error) {
            throw new Error(`Error creating client: ${error}`)
        }
    }

    async delete(id: number): Promise<void> {
        try {
            const clients = await this.readClientsFromFile()
            const updatedClients = clients.filter(client => client.id !== id)
            await this.writeClientsToFile(updatedClients)
            return this.deleteClient.execute(id) // Llamamos al caso de uso de eliminar cliente
        } catch (error) {
            throw new Error(`Error deleting client with ID ${id}: ${error}`)
        }
    }

    async findAll(): Promise<Client[]> {
        try {
            const clients = await this.readClientsFromFile()
            return clients
        } catch (error) {
            throw new Error(`Error fetching clients: ${error}`)
        }
    }

    async findById(id: number): Promise<Client> {
        try {
            const clients = await this.readClientsFromFile()
            const client = clients.find(c => c.id === id)
            if (!client) throw new Error('Client not found')
            return this.findClientById.execute(id)
        } catch (error) {
            throw new Error(`Error fetching client with ID ${id}: ${error}`)
        }
    }

    async update(client: Client): Promise<Client> {
        try {
            const clients = await this.readClientsFromFile()
            const updatedClients = clients.map(c => c.id === client.id ? client : c)
            await this.writeClientsToFile(updatedClients)
            return this.updateClient.execute(client)
        } catch (error) {
            throw new Error(`Error updating client: ${error}`)
        }
    }
}
