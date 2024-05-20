import { injectable } from "tsyringe";
import { Car, CarCreate, CarUpdate } from "../interfaces/car.interfaces";
import { prisma } from "../database/prisma";

@injectable()
export class CarServices {

    public create = async (data : CarCreate) : Promise<Car> => {
        return await prisma.car.create({data : data}) as Car;    
    }
    public get = async () : Promise<Car[]> => {
        return await prisma.car.findMany() as Car[];
    }
    public getById = async (id : string) : Promise<Car> => {
        return await prisma.car.findFirst({
            where : {id : id}
        }) as Car;
    }
    public update = async (id : string, data : CarUpdate) : Promise<Car> => {
        return await prisma.car.update({
            where : {id : id},
            data : data
        }) as Car;
    }
    public delete = async (id : string) => {
        await prisma.car.delete({
            where : {id : id}
        });
    }

}