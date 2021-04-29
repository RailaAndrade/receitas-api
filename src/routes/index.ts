import 'reflect-metadata'
import { Router } from 'express'
import { categoriasRoutes } from './categorias.routes';
import { usuariosRoutes } from './usuarios.routes';
import { authenticateRoutes } from './authenticate.routes';
import { receitasRoutes } from './receitas.routes';

const router = Router();

router.use('/sessions', authenticateRoutes)
router.use('/usuarios', usuariosRoutes)
router.use('/categorias', categoriasRoutes)
router.use('/receitas', receitasRoutes)


export { router }