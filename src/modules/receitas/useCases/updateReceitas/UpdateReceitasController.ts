import "reflect-metadata";
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateReceitasUseCase } from "./UpdateReceitasUseCase";





class UpdateReceitasController {

    async handle(request: Request, response: Response): Promise<Response> {

        const id_usuarios = request.usuario.id
        const id = parseInt(request.params.id)

        const { nome, ingredientes, modo_preparo, porcoes, tempo_preparo_minutos, id_categorias } = request.body


        const updateReceitasUseCase = container.resolve(UpdateReceitasUseCase)
        await updateReceitasUseCase.execute(id, { nome, ingredientes, modo_preparo, porcoes, tempo_preparo_minutos, id_usuarios, id_categorias })

        return response.status(201).send();
    }

}
export { UpdateReceitasController }