import { CreateClient } from "../use-case/Create.Client";
import { Client } from "../domain/models/Client.Model";
import fs from "fs";
import path from "path";

const filePath = path.resolve(__dirname, "../../data/clients.json");

export class ClientJsonAdapter {
    private createClient: CreateClient;

    constructor(createClient: CreateClient) {
        this.createClient = createClient;
    }

    async create(client: Client): Promise<Client> {
        const clients = JSON.parse(fs.readFileSync(filePath, "utf-8")) as Client[];
        clients.push(client);
        fs.writeFileSync(filePath, JSON.stringify(clients, null, 2));

        return this.createClient.execute(client);
    }

    // Métodos para update, find, delete, etc.
}
