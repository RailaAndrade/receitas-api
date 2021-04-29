
import { request } from "express";
import { inject, injectable } from "tsyringe";
import { Receita } from "../../entities/Receitas";
import { IReceitasRepository } from "../../repositories/IReceitasRepository";



@injectable()
class ListReceitasUseCase {

    constructor(
        @inject("ReceitasRepository")
        private receitasRepository: IReceitasRepository
    ) { }

    async execute(id_usuarios: number): Promise<Receita[]> {

        const receitas = await this.receitasRepository.listAllByUSer(id_usuarios);
        return receitas
    }
}
export { ListReceitasUseCase }