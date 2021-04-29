import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { ListCategoriasUseCase } from './ListCategoriasUseCase';


class ListCategoriasController {


    async handle(request: Request, response: Response): Promise<Response> {

        const listCategoriasUseCase = container.resolve(ListCategoriasUseCase);

        const all = await listCategoriasUseCase.execute();
        return response.json(all)
    }

}

export { ListCategoriasController }