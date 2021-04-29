import { ListReceitasController } from "./ListReceitasController";
import { ListReceitasUseCase } from "./ListReceitasUseCase";


const receitasRepository = null
const listReceitasUseCase = new ListReceitasUseCase(receitasRepository);
const listReceitasController = new ListReceitasController(listReceitasUseCase);

export { listReceitasController }