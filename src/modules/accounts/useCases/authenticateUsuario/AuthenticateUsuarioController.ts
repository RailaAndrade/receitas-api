import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUsuarioUseCase } from './AuthenticateUsuarioUseCase'


class AuthenticateUsuarioController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { login, senha } = request.body


        const authenticateUsuarioUseCase = container.resolve(AuthenticateUsuarioUseCase)
        const token = await authenticateUsuarioUseCase.execute({ senha, login })
        return response.json(token)
    }
}

export { AuthenticateUsuarioController }