import { ClientJsonAdapter } from "../adapters/Json.Adapter.Client";
import { CreateClient, DeleteClient, FindAllClients, FindClientById, UpdateClient } from "../use-case/index";
import { Address, Email, Phone, BankAccount } from "@models/index"
import { Client } from "../domain/models/Client.Model";
import fs from "fs/promises";
import path from "path";

const jsonFilePath = path.join(__dirname, 'clients.json');

jest.mock("fs/promises");

describe("ClientJsonAdapter", () => {
    let clientJsonAdapter: ClientJsonAdapter;

    beforeEach(() => {
        const mockClientRepository = {
            create: jest.fn(),
            delete: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn(),
            update: jest.fn()
        };

        const createClient = new CreateClient(mockClientRepository);
        const deleteClient = new DeleteClient(mockClientRepository);
        const findAllClients = new FindAllClients(mockClientRepository);
        const findClientById = new FindClientById(mockClientRepository);
        const updateClient = new UpdateClient(mockClientRepository);

        clientJsonAdapter = new ClientJsonAdapter(createClient, deleteClient, findAllClients, findClientById, updateClient);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    test("create() should add a client and write to JSON file", async () => {
        const mockClient: Client = ClientSchema;
        const mockClients: Client[] = [mockClient];

        // Mock de la lectura del archivo JSON para retornar clientes previos
        (fs.readFile as jest.Mock).mockResolvedValue(JSON.stringify(mockClients));

        // Mock de la escritura del archivo JSON
        (fs.writeFile as jest.Mock).mockResolvedValue(undefined);

        const result = await clientJsonAdapter.create(mockClient);

        expect(result).toEqual(mockClient);
        expect(fs.writeFile).toHaveBeenCalledWith(jsonFilePath, JSON.stringify([mockClient], null, 2));
    });

    test("findAll() should return a list of clients from JSON", async () => {
        const mockClients: Client[] = [ClientSchema];

        // Mock de la lectura del archivo JSON
        (fs.readFile as jest.Mock).mockResolvedValue(JSON.stringify(mockClients));

        const result = await clientJsonAdapter.findAll();

        expect(result).toEqual(mockClients);
    });

    test("findById() should return a client by ID from JSON", async () => {
        const mockClient: Client = ClientSchema;
        const mockClients: Client[] = [mockClient];

        // Mock de la lectura del archivo JSON
        (fs.writeFile as jest.Mock).mockResolvedValue(mockClients);

        const result = await clientJsonAdapter.findById(1);

        expect(result).toEqual(mockClient);
    });

    test("update() should update a client and write to JSON file", async () => {
        const mockClient: Client = ClientSchema;
        const mockClients: Client[] = [mockClient];

        // Mock de la lectura del archivo JSON
        (fs.writeFile as jest.Mock).mockResolvedValue(mockClients);

        // Mock de la escritura del archivo JSON
        (fs.writeFile as jest.Mock).mockResolvedValue(undefined);

        const updatedClient: Client = {
            ...mockClient,
            legal_name: "Updated Company",
            validateClient: mockClient.validateClient,
            validateRegistrationNumber: mockClient.validateRegistrationNumber,
            validateLegalName: mockClient.validateLegalName,
            validateTaxRate: mockClient.validateTaxRate,
            validateDiscount: mockClient.validateDiscount,
            validateEmails: mockClient.validateEmails,
            validatePhones: mockClient.validatePhones,
            validateBankAccounts: mockClient.validateBankAccounts
        };
        const result = await clientJsonAdapter.update(updatedClient);

        expect(result).toEqual(updatedClient);
        expect(fs.writeFile).toHaveBeenCalledWith(jsonFilePath, JSON.stringify([updatedClient], null, 2));
    });

    test("delete() should remove a client and write to JSON file", async () => {
        const mockClient: Client = ClientSchema;
        const mockClients: Client[] = [mockClient];

        // Mock de la lectura del archivo JSON
        (fs.writeFile as jest.Mock).mockResolvedValue(JSON.stringify(mockClients));

        // Mock de la escritura del archivo JSON
        (fs.writeFile as jest.Mock).mockResolvedValue(undefined);

        await clientJsonAdapter.delete(1);

        expect(fs.writeFile).toHaveBeenCalledWith(jsonFilePath, JSON.stringify([], null, 2)); // Asegurándonos de que se haya eliminado
    });
});

// Datos simulados para los clientes
const ClientSchema: Client = {
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
        new Address(1, 'Solf Larea', 'Lara', 'New York', 'Stanford', '48330', true),
        new Address(2, 'Solf Larea', 'Lara', 'New York', 'Stanford', '48330', false)
    ],
    emails: [
        new Email(1, "other@gmail.com", "Work"),
        new Email(2, "other2@gmail.com", "Personal")
    ],
    phones: [
        new Phone(1, 'Gabriel', '6839182930', 'Personal')
    ],
    bankAccounts: [
        new BankAccount(1, 'BBVA', '276473949947696', 'OT')
    ],
    validateClient: jest.fn(),
    validateRegistrationNumber: jest.fn(),
    validateLegalName: jest.fn(),
    validateTaxRate: jest.fn(),
    validateDiscount: jest.fn(),
    validateEmails: jest.fn(),
    validatePhones: jest.fn(),
    validateBankAccounts: jest.fn()
}
