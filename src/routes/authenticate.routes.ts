import { Router } from 'express';
import { AuthenticateUsuarioController } from '../modules/accounts/useCases/authenticateUsuario/AuthenticateUsuarioController';

const authenticateRoutes = Router()

const authenticateUsuarioController = new AuthenticateUsuarioController();

authenticateRoutes.post("/", authenticateUsuarioController.handle)


export { authenticateRoutes }