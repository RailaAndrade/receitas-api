import "reflect-metadata";
import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { AppError } from "../../../../errors/AppError";
import { SelectReceitasUseCase } from "./SelectReceitasUseCase";





class SelectReceitasController {

    async handle(request: Request, response: Response): Promise<Response> {

        const id = parseInt(request.params.id)

        const selectReceitasUseCase = container.resolve(SelectReceitasUseCase)
        const receita = await selectReceitasUseCase.execute(id)

        return response.json(receita)
    } catch(err) {
        console.log('teste')
    }
}


export { SelectReceitasController }