import { container } from "tsyringe"
import { CarServices } from "../../services/car.services"
import { prismaMock } from "../__mocks__/prisma";
import { carCreateMock, carMock } from "../__mocks__/car.mock";

describe("Unit test: create car", () => {

    test("create car shold work correctly", async () => {

        const carServices = container.resolve(CarServices);

        prismaMock.car.create.mockResolvedValue(carMock);

        const data = await carServices.create(carCreateMock);

        expect(data).toStrictEqual(carMock);
    })
})