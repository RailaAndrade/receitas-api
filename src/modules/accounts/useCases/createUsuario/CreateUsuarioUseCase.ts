import { inject, injectable } from "tsyringe"
import { hash } from "bcryptjs"
import { ICreateUsuarioDTO } from "../../dtos/ICreateUsuarioDTO"
import { IUsuariosRepository } from '../../repositories/IUsuariosRepository'
import { AppError } from "../../../../errors/AppError"

@injectable()
class CreateUsuarioUseCase {
    constructor(
        @inject("UsuariosRepository")
        private usuariosRepository: IUsuariosRepository
    ) { }
    async execute({ nome, login, senha }: ICreateUsuarioDTO): Promise<void> {
        const usuarioAlreadyExists = await this.usuariosRepository.findByLogin({ login })

        if (usuarioAlreadyExists) {
            throw new AppError("Usuário já existe")
        }
        const senhaHash = await hash(senha, 8)
        await this.usuariosRepository.create({
            nome,
            login,
            senha: senhaHash
        })

    }
}
export { CreateUsuarioUseCase }