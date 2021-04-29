import { ICreateReceitaDTO } from "../dtos/ICreateReceitaDTO";
import { Receita } from "../entities/Receitas";




interface IReceitasRepository {
    findByNome(nome: string): Promise<Receita>
    list(): Promise<Receita[]>

    listAllByUSer(id_usuarios: number): Promise<Receita[]>
    delete(id: number): Promise<void>
    findById(id: number): Promise<Receita>
    create(data: ICreateReceitaDTO): Promise<void>
    update(id: number, data: ICreateReceitaDTO): Promise<void>
}

export { IReceitasRepository, ICreateReceitaDTO }