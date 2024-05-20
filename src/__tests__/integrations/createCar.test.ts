import { prisma } from "../../database/prisma"
import { carCreateMock, carInvalidCreateMock } from "../__mocks__/car.mock"
import { carDefaultExpects } from "../utils/carDefaultExpects"
import { request } from "../utils/request"

describe("Integration test: create car", () => {

    test("should be able to create a todo successfully", async () => {
        const data = await request
            .post("/cars")
            .send(carCreateMock)
            .expect(201)
            .then(response => response.body);

        expect(data.id).toBeDefined();
        carDefaultExpects(data, carCreateMock);
    });

    test("should throw error when try to create a car with invalid body", async () => {
        await request
            .post("/cars")
            .send(carInvalidCreateMock)
            .expect(400);
    });
});