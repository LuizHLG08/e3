import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/appError";

export class CarMiddlewares {

    public static isCarIdValid = async (req : Request, res : Response, next : NextFunction) => {
        const car = await prisma.car.findFirst({
            where : {id : req.params.id}
        });

        if(!car) {
            throw new AppError("Car not found.", 404);
        }
        next();
    }

}