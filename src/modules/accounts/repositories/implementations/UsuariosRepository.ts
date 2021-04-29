import { getRepository, Repository } from 'typeorm'
import { IUsuariosRepository } from '../IUsuariosRepository'
import { ICreateUsuarioDTO } from '../../dtos/ICreateUsuarioDTO'
import { Usuario } from '../../entities/usuarios'

class UsuariosRepository implements IUsuariosRepository {

    private repository: Repository<Usuario>
    constructor() {
        this.repository = getRepository(Usuario)
    }

    async findByLogin(login: string): Promise<Usuario> {
        const usuario = await this.repository.findOne({ login })
        return usuario;
    }
    async create({ nome, login, senha }: ICreateUsuarioDTO): Promise<void> {
        const usuario = this.repository.create(
            {
                nome,
                login,
                senha
            })
        await this.repository.save(usuario)

    }

    async findById(id: number): Promise<Usuario> {

        const usuario = await this.repository.findOne({ id })

        return usuario;
    }
}

export { UsuariosRepository }