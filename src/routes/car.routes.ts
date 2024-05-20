import { Router } from "express";
import { container } from "tsyringe";
import { CarServices } from "../services/car.services";
import { CarControllers } from "../controllers/car.controllers";
import { EnsureMiddlewares } from "../middlewares/ensure.middlewares";
import { carCreateSchema, carUpdateSchema } from "../schemas/car.schemas";
import { CarMiddlewares } from "../middlewares/car.middlewares";


export const carRouter = Router();

container.registerSingleton("CarServices", CarServices);

const carControllers = container.resolve(CarControllers);

carRouter.post("/",
    EnsureMiddlewares.validateBody(carCreateSchema),
    (req, res) => carControllers.create(req, res)
);
carRouter.get("/",
    (req, res) => carControllers.get(req, res)
);
carRouter.get("/:id",
    CarMiddlewares.isCarIdValid,
    (req, res) => carControllers.getById(req, res)
);
carRouter.patch("/:id",
    CarMiddlewares.isCarIdValid,
    EnsureMiddlewares.validateBody(carUpdateSchema),
    (req, res) => carControllers.update(req, res)
);
carRouter.delete("/:id",
    CarMiddlewares.isCarIdValid,
    (req, res) => carControllers.delete(req, res)
);