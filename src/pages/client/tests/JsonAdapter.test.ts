import { describe, it, expect, beforeEach, mock } from "bun:test";
import { ClientJsonAdapter } from "../adapters/Json.Adapter.Client";
import { Address, Email, Phone, BankAccount } from "@models/index"
import { Client } from "../domain/models/Client.Model";
import fs from "fs/promises";
import path from "path";

describe("ClientJsonAdapter", () => {
    let adapter: ClientJsonAdapter;
    const jsonFilePath = path.join(__dirname, "clients.json");
    const mockClients: Client[] = [
        new Client(
            1,
            "123456",
            "Test Company",
            "JU",
            "https://example.com",
            "USA",
            15,
            5,
            "Test client",
            1,
            [
                new Address(1, "Solf Larea", "New York", "Lara", "Lara", "49302", true)
            ],
            [
                new Email(1, "other@gmail.com", "Work")
            ],
            [
                new Phone(1, "Gabriel", "6839284193", "Personal")
            ],
            [
                new BankAccount(1, "BBVA", "276473949947696", "OT")
            ]
        )
    ]

    beforeEach(() => {
        adapter = new ClientJsonAdapter(jsonFilePath);  // Crear una nueva instancia de la clase antes de cada test
    });


    it("should read clients from file", async () => {
        // Mock de fs.readFile para que no lea un archivo real
        mock(async () => {
            JSON.stringify(mockClients)
        }
        );

        // Llamamos al método que queremos probar
        const clients = await adapter.readClientsFromFile();

        // Comprobamos que la función devuelve los datos esperados
        expect(clients).toEqual(mockClients);

        // Verificamos que fs.readFile fue llamado con el archivo correcto
        expect(fs.readFile).toHaveBeenCalledWith(jsonFilePath, "utf-8");
    });

    it("should write clients to file", async () => {
        // Mock de fs.writeFile para que no escriba en un archivo real
        mock(fs, "writeFile", async () => undefined);

        // Llamamos al método que queremos probar
        await adapter.writeClientsToFile(mockClients);

        // Verificamos que fs.writeFile haya sido llamado con los parámetros correctos
        expect(fs.writeFile).toHaveBeenCalledWith(jsonFilePath, JSON.stringify(mockClients, null, 2));

        // Verificamos que no hubo ningún error
        expect(fs.writeFile).toHaveBeenCalledTimes(1);
    });

    it("should create a new client", async () => {

    });

    it("should delete a client by id", async () => {

    });

    it("should find a client by id", async () => {

    });

    it("should update a client", async () => {

    });
});