import type {Config} from 'jest';

const config: Config = {
 coverageProvider: "v8",
 preset: "ts-jest",
 testEnvironment: "node",
 testMatch: ["**/__tests__/integrations/**/*.(test|spec).[jt]s"],
 setupFilesAfterEnv: ["./src/__tests__/utils/clearDatabase.ts"]
};

export default config;