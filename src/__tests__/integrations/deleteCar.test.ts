import { prisma } from "../../database/prisma";
import { Car } from "../../interfaces/car.interfaces";
import { carCreateMock, carInvalidIdMock } from "../__mocks__/car.mock";
import { request } from "../utils/request";

describe("Integration test: update car", () => {

    test("should be able to delete car successfully", async () => {
        const car = await prisma.car.create({data : carCreateMock}) as Car;

        await request
            .delete(`/cars/${car.id}`)
            .expect(204);       
    });

    test("should throw error when car is invalid", async () => {

        await request
            .delete(`/cars/${carInvalidIdMock}`)
            .expect(404);
    });
});