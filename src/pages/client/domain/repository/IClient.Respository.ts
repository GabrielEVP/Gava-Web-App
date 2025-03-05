import { Client } from "../models/Client.Model";

export interface ClientRepository {
    create(client: Client): Promise<Client>;
    update(client: Client): Promise<Client>;
    findById(id: number): Promise<Client | null>;
    findAll(): Promise<Client[]>;
    delete(id: number): Promise<void>;
}
