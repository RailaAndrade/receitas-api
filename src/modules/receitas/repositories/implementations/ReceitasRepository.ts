import { getRepository, Repository } from "typeorm";
import { ICreateReceitaDTO } from "../../dtos/ICreateReceitaDTO";
import { Receita } from "../../entities/Receitas";
import { IReceitasRepository } from "../IReceitasRepository";

class ReceitasRepository implements IReceitasRepository {


    private repository: Repository<Receita>
    constructor() {
        this.repository = getRepository(Receita)
    }


    async update(id: number, { nome, ingredientes, modo_preparo, porcoes, tempo_preparo_minutos, id_usuarios, id_categorias }: ICreateReceitaDTO): Promise<void> {
        const receita = await this.repository.update(id, {
            nome,
            modo_preparo,
            porcoes,
            ingredientes,
            tempo_preparo_minutos,
            id_usuarios,
            id_categorias,
        })
    }


    async delete(id: number): Promise<void> {

        const receitas = await this.repository.delete(id)

    }
    async listAllByUSer(id_usuarios: number): Promise<Receita[]> {

        const receitas = await this.repository.find({ id_usuarios })
        return receitas
    }

    async findById(id: number): Promise<Receita> {
        const receitas = await this.repository.findOne(id)
        return receitas;
    }

    async create({ nome, ingredientes, modo_preparo, porcoes, tempo_preparo_minutos, id_usuarios, id_categorias }: ICreateReceitaDTO): Promise<void> {
        const receita = this.repository.create(
            {
                nome,
                modo_preparo,
                porcoes,
                id_usuarios,
                ingredientes,
                tempo_preparo_minutos,
                id_categorias,
            })
        await this.repository.save(receita)
    }
    findByNome(nome: string): Promise<Receita> {
        throw new Error("Method not implemented.");
    }
    async list(): Promise<Receita[]> {
        const receitas = await this.repository.find()
        return receitas

    }

}

export { ReceitasRepository }

