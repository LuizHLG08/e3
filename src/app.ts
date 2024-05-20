import "express-async-errors"
import "reflect-metadata"
import express, {Application, json} from "express";
import cors from "cors";
import helmet from "helmet";
import { carRouter } from "./routes/car.routes";
import { HandleErrorsMiddleware } from "./middlewares/handleErrors.middleware";

export const app : Application = express();

app.use(cors());
app.use(helmet());
app.use(json());

app.use("/cars", carRouter);
app.use(HandleErrorsMiddleware.execute);


