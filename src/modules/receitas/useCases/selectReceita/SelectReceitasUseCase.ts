import { inject, injectable } from "tsyringe"
import { hash } from "bcryptjs"


import { IReceitasRepository } from "../../repositories/IReceitasRepository"
import { ICreateReceitaDTO } from '../../dtos/ICreateReceitaDTO'
import { Receita } from "../../entities/Receitas"
@injectable()
class SelectReceitasUseCase {
    constructor(
        @inject("ReceitasRepository")
        private receitasRepository: IReceitasRepository
    ) { }
    async execute(id: number): Promise<Receita> {

        const receita = await this.receitasRepository.findById(id)

        return receita;
    }
}
export { SelectReceitasUseCase }