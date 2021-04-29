import { Categoria } from "../entities/Categoria";


interface ICreateCategoryDTO {
    nome: string;
}


interface ICategoriasRepository {
    findByNome(nome: string): Promise<Categoria>
    list(id: number): Promise<Categoria>
    listAll(): Promise<Categoria[]>
}

export { ICategoriasRepository, ICreateCategoryDTO }