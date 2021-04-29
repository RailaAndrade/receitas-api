import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { AppError } from '../errors/AppError';
import { UsuariosRepository } from '../modules/accounts/repositories/implementations/UsuariosRepository';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError('token missing', 401)
    }

    const [, token] = authHeader.split(" ")
    try {

        const { sub: login } = verify(token, "e8e88d8b4b6cfeea1608a05e8866cba") as IPayload

        const usersRepository = new UsuariosRepository();


        const usuario = await usersRepository.findByLogin(login)

        if (!usuario) {
            throw new AppError("Usuário não existe", 401)

        } else {
            request.usuario = {
                id: usuario.id
            }
        }
        next();
    } catch {
        throw new AppError("token invalido", 401);

    }
}