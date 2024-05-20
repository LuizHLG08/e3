import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { CarServices } from "../services/car.services";


@injectable()
export class CarControllers {

    constructor(@inject("CarServices") private carServices : CarServices){}

    public create = async (req : Request, res : Response) : Promise<Response> => {
        const response = await this.carServices.create(req.body);
        
        return res.status(201).json(response);
    }
    public get = async (_req : Request, res : Response) : Promise<Response> => {
        const response = await this.carServices.get();
        
        return res.status(200).json(response);
    }
    public getById = async (req : Request, res : Response) : Promise<Response> => {
        const response = await this.carServices.getById(req.params.id);
        
        return res.status(200).json(response);
    }
    public update = async (req : Request, res : Response) : Promise<Response> => {
        const response = await this.carServices.update(req.params.id, req.body);
        
        return res.status(200).json(response);
    }
    public delete = async (req : Request, res : Response) : Promise<Response> => {
        await this.carServices.delete(req.params.id);

        return res.status(204).json();
    }
}