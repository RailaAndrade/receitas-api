import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { ListReceitasUseCase } from './ListReceitasUseCase';


class ListReceitasController {


    async handle(request: Request, response: Response): Promise<Response> {

        const id_usuarios = request.usuario.id

        const listReceitasUseCase = container.resolve(ListReceitasUseCase);

        const all = await listReceitasUseCase.execute(id_usuarios);
        return response.json(all)
    }

}

export { ListReceitasController }