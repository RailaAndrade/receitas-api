import { router } from './routes';
import swaggerUi from "swagger-ui-express"
import swaggerFile from "./swagger.json"
import "../src/database"
import './shared/container'
import { Request, Response, NextFunction } from 'express';
import 'express-async-errors'
import { AppError } from './errors/AppError';


var express = require('express');

var cors = require('cors')
var app = express()

app.use(cors())

app.use(express.json());


app.use(router)


app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({ message: err.message });
        }

        return response.status(500).json({
            status: "error",
            message: `internal server error -${err.message}`
        })
    });

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))


app.listen(3333, () => console.log("server is Running"))