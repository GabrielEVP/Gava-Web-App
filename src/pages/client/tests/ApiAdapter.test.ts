import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { ClientApiAdapter } from "../adapters/Api.Adapter.Client";
import { CreateClient, DeleteClient, FindAllClients, FindClientById, UpdateClient } from "../use-case/index";
import { Address, Email, Phone, BankAccount } from "@models/index"
import { Client } from "../domain/models/Client.Model";

describe("ClientApiAdapter", () => {
    let clientApiAdapter: ClientApiAdapter;
    let mockAxios: MockAdapter;
    const apiUrl = 'localhost:80/api/clients'

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

        clientApiAdapter = new ClientApiAdapter(createClient, deleteClient, findAllClients, findClientById, updateClient);
        mockAxios = new MockAdapter(axios);
    });

    afterEach(() => {
        mockAxios.reset();
    });

    test("create() should send a client and return the response", async () => {
        const mockClient: Client = ClientSchema
        mockAxios.onPost(apiUrl).reply(200, mockClient);

        const result = await clientApiAdapter.create(mockClient);
        expect(result).toEqual(mockClient);
    });

    test("findAll() should return a list of clients", async () => {
        const mockClients: Client[] = [ClientSchema];
        mockAxios.onGet(apiUrl).reply(200, mockClients);

        const result = await clientApiAdapter.findAll();
        expect(result).toEqual(mockClients);
    });

    test("findById() should fetch a client by ID", async () => {
        const mockClient: Client = ClientSchema
        mockAxios.onGet(apiUrl).reply(200, mockClient);

        const result = await clientApiAdapter.findById(1);
        expect(result).toEqual(mockClient);
    });

    test("update() should update a client", async () => {
        const mockClient: Client = ClientSchema
        mockAxios.onPut(apiUrl).reply(200, mockClient);

        const result = await clientApiAdapter.update(mockClient);
        expect(result).toEqual(mockClient);
    });

    test("delete() should remove a client", async () => {
        mockAxios.onDelete(apiUrl).reply(204);
        await expect(clientApiAdapter.delete(1)).resolves.toBeUndefined();
    });
});

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

