import { container } from "tsyringe";
import { prisma } from "../../database/prisma"
import { carCreateMock, carMock } from "../__mocks__/car.mock"
import { CarServices } from "../../services/car.services";


describe("Unit test: delete car", () => {

    test("should delete car successfully", async () => {

        const carServices = container.resolve(CarServices);

        await carServices.delete(carMock.id);
    })
})