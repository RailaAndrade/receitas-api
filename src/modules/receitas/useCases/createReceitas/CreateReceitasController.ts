import "reflect-metadata";
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateReceitasUseCase } from "./CreateReceitasUseCase";





class CreateReceitasController {

    async handle(request: Request, response: Response): Promise<Response> {

        const id_usuarios = request.usuario.id


        const { nome, ingredientes, modo_preparo, porcoes, tempo_preparo_minutos, id_categorias } = request.body


        const createReceitasUseCase = container.resolve(CreateReceitasUseCase)
        await createReceitasUseCase.execute({ nome, ingredientes, modo_preparo, porcoes, tempo_preparo_minutos, id_usuarios, id_categorias })

        return response.status(201).send();
    }

}
export { CreateReceitasController }