import { Car } from "@prisma/client";
import { CarCreate } from "../../interfaces/car.interfaces";


export const carDefaultExpects = (data : Car, expectData: CarCreate) => {
    expect(data.name).toBe(expectData.name);
    expect(data.brand).toBe(expectData.brand);
    expect(data.description).toBe(expectData.description);
    expect(data.km).toBe(expectData.km);
    expect(data.year).toBe(expectData.year);
}