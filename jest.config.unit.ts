/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
 coverageProvider: "v8",
 preset: "ts-jest",
 testEnvironment: "node",
 testMatch: ["**/__tests__/units/**/*.(test|spec).[jt]s"],
 setupFilesAfterEnv: ["./src/__tests__/__mocks__/prisma.ts"],
};

export default config;
