import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { SelectCategoriasUseCase } from './SelectCategoriasUseCase';


class SelectCategoriasController {


    async handle(request: Request, response: Response): Promise<Response> {

        const id = parseInt(request.params.id)

        const selectCategoriasUseCase = container.resolve(SelectCategoriasUseCase);

        const all = await selectCategoriasUseCase.execute(id);
        return response.json(all)
    }

}

export { SelectCategoriasController }