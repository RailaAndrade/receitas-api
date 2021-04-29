import "reflect-metadata";
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteReceitasUseCase } from "./DeleteReceitasUseCase";
import { AppError } from "../../../../errors/AppError";





class DeleteReceitasController {

    async handle(request: Request, response: Response): Promise<Response> {

        const id = parseInt(request.params.id)

        const deleteReceitasUseCase = container.resolve(DeleteReceitasUseCase)
        await deleteReceitasUseCase.execute(id)

        return response.status(201).send();
    } catch(err) {
        console.log('teste')
    }
}


export { DeleteReceitasController }