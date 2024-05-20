import { container } from "tsyringe"
import { CarServices } from "../../services/car.services"
import { prismaMock } from "../__mocks__/prisma";
import { carListMock } from "../__mocks__/car.mock";

describe("Unit test: get cars", () => {

    test("get cars should work correctly", async () => {

        const carServices = container.resolve(CarServices);

        await prismaMock.car.findMany.mockResolvedValue(carListMock);

        const data = await carServices.get();

        expect(data).toHaveLength(2);
        expect(data[0]).toStrictEqual(carListMock[0]);
        expect(data[1]).toStrictEqual(carListMock[1]);
    })
})