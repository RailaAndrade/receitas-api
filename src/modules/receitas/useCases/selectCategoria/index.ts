import { CategoriasRepository } from "../../repositories/implementations/CategoriasRepository";
import { SelectCategoriasController } from "./SelectCategoriasController";
import { SelectCategoriasUseCase } from "./SelectCategoriasUseCase";

const categoriasRepository = null
const selectCategoriasUseCase = new SelectCategoriasUseCase(categoriasRepository);
const selectCategoriasController = new SelectCategoriasController(selectCategoriasUseCase);

export { selectCategoriasController }