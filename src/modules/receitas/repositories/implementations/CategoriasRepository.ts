import { getRepository, Repository } from "typeorm";
import { Categoria } from "../../entities/Categoria";
import { ICategoriasRepository, ICreateCategoryDTO } from "../ICategoriasRepository";



class CategoriasRepository implements ICategoriasRepository {
    private repository: Repository<Categoria>;

    private static INSTANCE: CategoriasRepository;

    constructor() {
        this.repository = getRepository(Categoria)
    }


    async listAll(): Promise<Categoria[]> {
        const categorias = await this.repository.find()
        return categorias


    }

    async list(id: number): Promise<Categoria> {
        const categoria = await this.repository.findOne({ id })
        return categoria

    }

    async findByNome(nome: string): Promise<Categoria> {
        const categoria = await this.repository.findOne({ nome })
        return categoria;
    }



}

export { CategoriasRepository }