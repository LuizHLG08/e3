import { prisma } from "../../database/prisma";
import { carCreateListMock, carListMock } from "../__mocks__/car.mock";
import { carDefaultExpects } from "../utils/carDefaultExpects";
import { request } from "../utils/request";

describe("Integration test: get cars", () => {

    test("should be able to gat many cars successfully", async () => {

        await prisma.car.createMany({data: carCreateListMock});

        const data = await request
            .get("/cars")
            .expect(200)
            .then(response => response.body);

        expect(data).toHaveLength(2)
        expect(data[0].id).toBeDefined();
        expect(data[1].id).toBeDefined();
        carDefaultExpects(data[0], carCreateListMock[0]);
        carDefaultExpects(data[1], carCreateListMock[1]);
    });
});