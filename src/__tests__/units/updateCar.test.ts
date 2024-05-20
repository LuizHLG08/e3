import { container } from "tsyringe";
import { CarServices } from "../../services/car.services";
import { prismaMock } from "../__mocks__/prisma";
import { carMock, carUpdateMock } from "../__mocks__/car.mock";

describe("Unit test: update car", () => {

    test("should update car correctly", async () => {

        const carServices = container.resolve(CarServices);

        const carExpect = {...carMock, ...carUpdateMock}

        await prismaMock.car.update.mockResolvedValue(carExpect);
        
        const data = await carServices.update(carMock.id, carUpdateMock);

        expect(data).toStrictEqual(carExpect);
    })
})