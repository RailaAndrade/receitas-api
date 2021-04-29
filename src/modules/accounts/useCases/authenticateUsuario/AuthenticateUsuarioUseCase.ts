import { inject, injectable } from "tsyringe";
import { IUsuariosRepository } from "../../repositories/IUsuariosRepository";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { AppError } from "../../../../errors/AppError";

interface IRequest {
    login: string;
    senha: string;


}

interface IResponse {
    usuario: {
        nome: string;
        login: string;
        id: number;
    };
    token: string;
}

@injectable()
class AuthenticateUsuarioUseCase {
    constructor(
        @inject("UsuariosRepository")
        private usuarioRepository: IUsuariosRepository
    ) { }
    async execute({ login, senha }: IRequest): Promise<IResponse> {

        const usuario = await this.usuarioRepository.findByLogin(login);


        if (!usuario) {
            throw new AppError("Email ou senha incorretos");
        }

        const senhaMatch = await compare(senha, usuario.senha)
        if (!senhaMatch) {
            throw new AppError("Email ou senha incorretos");
        }

        const token = sign({}, "e8e88d8b4b6cfeea1608a05e8866cba", { subject: usuario.login, expiresIn: "1d" })

        const tokenReturn: IResponse = {
            token,
            usuario: {
                nome: usuario.nome,
                login: login,
                id: usuario.id

            }
        }
        return tokenReturn
    }

}

export { AuthenticateUsuarioUseCase }