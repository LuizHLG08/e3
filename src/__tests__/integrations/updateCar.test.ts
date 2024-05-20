import { prisma } from "../../database/prisma";
import { Car } from "../../interfaces/car.interfaces";
import { carCreateMock, carInvalidIdMock } from "../__mocks__/car.mock";
import { request } from "../utils/request";

describe("Integration test: update car", () => {

    test("should be able to update car successfully", async () => {
        const car = await prisma.car.create({data : carCreateMock}) as Car;

        const data = await request
            .patch(`/cars/${car.id}`)
            .expect(200)
            .then(response => response.body);
        
        expect(data).toStrictEqual(car);
    });

    test("should throw error when send a invalid id", async () => {

        await request
            .patch(`/cars/${carInvalidIdMock}`)
            .expect(404);
    });
});