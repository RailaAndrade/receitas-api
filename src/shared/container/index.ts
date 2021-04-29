import { container } from "tsyringe"
import { IUsuariosRepository } from "../../modules/accounts/repositories/IUsuariosRepository"
import { UsuariosRepository } from "../../modules/accounts/repositories/implementations/UsuariosRepository"
import { ICategoriasRepository } from '../../modules/receitas/repositories/ICategoriasRepository'
import { CategoriasRepository } from '../../modules/receitas/repositories/implementations/CategoriasRepository'
import { IReceitasRepository } from "../../modules/receitas/repositories/IReceitasRepository"
import { ReceitasRepository } from "../../modules/receitas/repositories/implementations/ReceitasRepository"



container.registerSingleton<ICategoriasRepository>(
    "CategoriasRepository",
    CategoriasRepository
)

container.registerSingleton<IUsuariosRepository>(
    "UsuariosRepository",
    UsuariosRepository
)


container.registerSingleton<IReceitasRepository>(
    "ReceitasRepository",
    ReceitasRepository
)

