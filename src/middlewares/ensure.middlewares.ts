import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export class EnsureMiddlewares {
    public static validateBody = (schema : AnyZodObject) => (req: Request, _res : Response, next : NextFunction) => {
        req.body = schema.parse(req.body);
        return next();
    }
}