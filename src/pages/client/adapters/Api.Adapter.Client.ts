import CreateClient from "../use-case/Create.Client";
import { UpdateClient } from "../use-case/Update.Client";
import Client from "../domain/models/Client.Model";
import axios from "axios";

export class ClientApiAdapter {
    private createClient: CreateClient;
    private updateClient: UpdateClient;

    constructor(createClient: CreateClient, updateClient: UpdateClient) {
        this.createClient = createClient;
        this.updateClient = updateClient;
    }

    async create(client: Client): Promise<Client> {
        const response = await axios.post("https://api.example.com/clients", client);
        return this.createClient.execute(response.data);
    }

    async update(client: Client): Promise<Client> {
        const response = await axios.put("https://api.example.com/clients", client);
        return this.updateClient.execute(response.data);
    }

    // Otros métodos similares para update, find, delete, etc.
}
