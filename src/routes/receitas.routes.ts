import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateReceitasController } from '../modules/receitas/useCases/createReceitas/CreateReceitasController';
import { DeleteReceitasController } from '../modules/receitas/useCases/deleteReceitas/DeleteReceitasController';
import { listReceitasController } from '../modules/receitas/useCases/listReceitas';
import { SelectReceitasController } from '../modules/receitas/useCases/selectReceita/SelectReceitasController';
import { UpdateReceitasController } from '../modules/receitas/useCases/updateReceitas/UpdateReceitasController';


const receitasRoutes = Router();
receitasRoutes.use(ensureAuthenticated)
const createReceitaController = new CreateReceitasController();
const deleteReceitaController = new DeleteReceitasController();
const selectReceitaController = new SelectReceitasController();
const updateReceitaController = new UpdateReceitasController();
receitasRoutes.get("/", (request, response) => {
    return listReceitasController.handle(request, response);
})


receitasRoutes.post("/", createReceitaController.handle)




receitasRoutes.patch("/:id", updateReceitaController.handle)
receitasRoutes.delete("/:id", deleteReceitaController.handle)


receitasRoutes.get("/:id", selectReceitaController.handle)


export { receitasRoutes }

