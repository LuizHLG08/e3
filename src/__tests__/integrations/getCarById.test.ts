import { prisma } from "../../database/prisma"
import { Car } from "../../interfaces/car.interfaces"
import { carCreateMock, carInvalidIdMock } from "../__mocks__/car.mock"
import { carDefaultExpects } from "../utils/carDefaultExpects"
import { request } from "../utils/request"

describe("Integration test: get car by id", () => {

    test("should be able to get a car by id successfully", async () => {
        const car = await prisma.car.create({data : carCreateMock}) as Car;

        const {id, ...carData} = car;

        const data = await request
            .get(`/cars/${id}`)
            .expect(200)
            .then(response => response.body);
        
        expect(data.id).toStrictEqual(id);
        carDefaultExpects(data, carData);
    });

    test("should throw error when send a invalid id", async () => {

        await request
            .get(`/cars/${carInvalidIdMock}`)
            .expect(404);
    });
});