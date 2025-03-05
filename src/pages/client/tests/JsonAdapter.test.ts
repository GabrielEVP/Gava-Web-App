import { describe, it, expect, beforeEach, vi } from "bun:test";
import { CreateClient, DeleteClient, FindAllClients, FindClientById, UpdateClient } from '../use-case/index'
import { ClientJsonAdapter } from "../adapters/Json.Adapter.Client";
import { Client } from "../domain/models/Client.Model";
import fs from "fs/promises";
import path from "path";

const mockClientRepository = {
    create: vi.fn(),
    update: vi.fn(),
    findById: vi.fn(),
    findAll: vi.fn(),
    delete: vi.fn()
};

const mockCreateClient = new CreateClient(mockClientRepository);
mockCreateClient.execute = vi.fn();

const mockDeleteClient = new DeleteClient(mockClientRepository);
mockDeleteClient.execute = vi.fn();

const mockFindAllClients = new FindAllClients(mockClientRepository);
mockFindAllClients.execute = vi.fn();

const mockFindClientById = new FindClientById(mockClientRepository);
mockFindClientById.execute = vi.fn();

const mockUpdateClient = new UpdateClient(mockClientRepository);
mockUpdateClient.execute = vi.fn();

vi.mock("fs/promises", () => ({
    readFile: vi.fn(),
    writeFile: vi.fn()
}));

describe("ClientJsonAdapter", () => {
    let adapter: ClientJsonAdapter;
    const jsonFilePath = path.join(__dirname, "clients.json");
    const mockClients: Client[] = [
        {
            id: 1,
            registration_number: "123456",
            legal_name: "Test Company",
            type: "JU",
            website: "https://example.com",
            country: "USA",
            tax_rate: 15,
            discount: 5,
            notes: "Test client",
            user_id: 1,
            address: [
                { id: 1, address: "Solf Larea", city: "Lara", state: "New York", postalCode: "48330", municipality: "Some Municipality", isBilling: true },
                { id: 2, address: "Solf Larea", city: "Lara", state: "New York", postalCode: "48330", municipality: "Some Municipality", isBilling: false },
            ],
            emails: [
                { id: 1, email: "other@gmail.com", type: "Work" },
                { id: 2, email: "other2@gmail.com", type: "Work" },
            ],
            phones: [
                { id: 1, name: "Gabriel", phone: "6839182930", type: "Personal" }
            ],
            bankAccounts: [
                { id: 1, name: "BBVA", accountNumber: "276473949947696", type: "OT" }
            ]
        }
    ];

    beforeEach(() => {
        adapter = new ClientJsonAdapter(
            mockCreateClient,
            mockDeleteClient,
            mockFindAllClients,
            mockFindClientById,
            mockUpdateClient
        );
        vi.resetAllMocks();
    });

    it("should read clients from file", async () => {
        (fs.readFile as vi.Mock).mockResolvedValue(JSON.stringify(mockClients));
        const clients = await adapter.findAll();
        expect(clients).toEqual(mockClients);
    });

    it("should write clients to file", async () => {
        await adapter["writeClientsToFile"](mockClients);
        expect(fs.writeFile).toHaveBeenCalledWith(jsonFilePath, JSON.stringify(mockClients, null, 2));
    });

    it("should create a new client", async () => {
        (fs.readFile as vi.Mock).mockResolvedValue(JSON.stringify(mockClients));
        (fs.writeFile as vi.Mock).mockResolvedValue();
        mockCreateClient.execute.mockResolvedValue(mockClients[0]);
        const newClient = mockClients[0];
        const result = await adapter.create(newClient);
        expect(result).toEqual(newClient);
        expect(fs.writeFile).toHaveBeenCalled();
        expect(mockCreateClient.execute).toHaveBeenCalledWith(newClient);
    });

    it("should delete a client by id", async () => {
        (fs.readFile as vi.Mock).mockResolvedValue(JSON.stringify(mockClients));
        (fs.writeFile as vi.Mock).mockResolvedValue();
        (mockUpdateClient.execute as vi.Mock).mockResolvedValue(mockClients[0]);
        await adapter.delete(1);
        expect(fs.writeFile).toHaveBeenCalled();
        expect(mockDeleteClient.execute).toHaveBeenCalledWith(1);
    });

    it("should find a client by id", async () => {
        (fs.readFile as vi.Mock).mockResolvedValue(JSON.stringify(mockClients));
        (mockUpdateClient.execute as vi.Mock).mockResolvedValue(mockClients[0]);
        const client = await adapter.findById(1);
        expect(client).toEqual(mockClients[0]);
        expect(mockFindClientById.execute).toHaveBeenCalledWith(1);
    });

    it("should update a client", async () => {
        (fs.readFile as vi.Mock).mockResolvedValue(JSON.stringify(mockClients));
        (fs.writeFile as vi.Mock).mockResolvedValue();
        (mockUpdateClient.execute as vi.Mock).mockResolvedValue(mockClients[0]);
        const updatedClient = new Client(
            mockClients[0].id,
            mockClients[0].registration_number,
            "Updated Company",
            mockClients[0].type,
            mockClients[0].website,
            mockClients[0].country,
            mockClients[0].tax_rate,
            mockClients[0].discount,
            mockClients[0].notes,
            mockClients[0].user_id,
            mockClients[0].address,
            mockClients[0].emails,
            mockClients[0].phones,
            mockClients[0].bankAccounts
        );
        const result = await adapter.update(updatedClient);
        expect(result).toEqual(updatedClient);
        expect(fs.writeFile).toHaveBeenCalled();
        expect(mockUpdateClient.execute).toHaveBeenCalledWith(updatedClient);
    });
});