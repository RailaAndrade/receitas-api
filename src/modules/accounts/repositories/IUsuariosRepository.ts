import { ICreateUsuarioDTO } from "../dtos/ICreateUsuarioDTO";
import { Usuario } from "../entities/usuarios";


interface IUsuariosRepository {
    create(data: ICreateUsuarioDTO): Promise<void>
    findByLogin(login: string): Promise<Usuario>
    findById(id: number): Promise<Usuario>

}

export { IUsuariosRepository }