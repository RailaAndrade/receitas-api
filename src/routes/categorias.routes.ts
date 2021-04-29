import { Router } from 'express'
import { listCategoriasController } from '../modules/receitas/useCases/listCategorias';
import { selectCategoriasController } from '../modules/receitas/useCases/selectCategoria';

const categoriasRoutes = Router();

categoriasRoutes.get("/", (request, response) => {
    return listCategoriasController.handle(request, response);
})

categoriasRoutes.get("/:id", (request, response) => {
    return selectCategoriasController.handle(request, response);
})

export { categoriasRoutes }