import { Router } from 'express'
import { CreateUsuarioController } from '../modules/accounts/useCases/createUsuario/CreateUsuarioController';


const usuariosRoutes = Router();

const createUsuarioController = new CreateUsuarioController();

usuariosRoutes.post("/", createUsuarioController.handle)

export { usuariosRoutes }

