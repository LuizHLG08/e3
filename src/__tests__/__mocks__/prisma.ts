import "reflect-metadata"
import { PrismaClient } from "@prisma/client";
import { mockDeep, mockReset, DeepMockProxy } from "jest-mock-extended";
import { prisma } from "../../database/prisma";

jest.mock("../../database/prisma", () => ({
    __esModule: true,
    prisma: mockDeep<PrismaClient>(),
}))

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>

beforeEach(() => {
    mockReset(prismaMock)
})