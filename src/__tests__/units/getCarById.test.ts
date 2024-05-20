import { container } from "tsyringe"
import { CarServices } from "../../services/car.services"
import { prismaMock } from "../__mocks__/prisma";
import { carMock } from "../__mocks__/car.mock";

describe("Unit test: get car by id", () => {

    test("should get car by id correctly", async () => {

        const carServices = container.resolve(CarServices);

        await prismaMock.car.findFirst.mockResolvedValue(carMock);
        
        const data = await carServices.getById(carMock.id);

        expect(data).toStrictEqual(carMock);
    })
})