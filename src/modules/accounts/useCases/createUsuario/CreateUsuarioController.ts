import "reflect-metadata";
import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateUsuarioUseCase } from "./CreateUsuarioUseCase";



class CreateUsuarioController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { nome, login, senha } = request.body

        const createUsuarioUseCase = container.resolve(CreateUsuarioUseCase)
        await createUsuarioUseCase.execute({ nome, login, senha })

        return response.status(201).send();
    }

}
export { CreateUsuarioController }