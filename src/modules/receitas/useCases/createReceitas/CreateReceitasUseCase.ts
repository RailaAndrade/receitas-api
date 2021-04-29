import { inject, injectable } from "tsyringe"
import { hash } from "bcryptjs"


import { AppError } from "../../../../errors/AppError"
import { IReceitasRepository } from "../../repositories/IReceitasRepository"
import { ICreateReceitaDTO } from '../../dtos/ICreateReceitaDTO'
@injectable()
class CreateReceitasUseCase {
    constructor(
        @inject("ReceitasRepository")
        private receitasRepository: IReceitasRepository
    ) { }
    async execute({ nome, ingredientes, modo_preparo, porcoes, tempo_preparo_minutos, id_usuarios, id_categorias }: ICreateReceitaDTO): Promise<void> {

        await this.receitasRepository.create({
            nome, ingredientes, modo_preparo, porcoes, tempo_preparo_minutos, id_usuarios, id_categorias
        })

    }
}
export { CreateReceitasUseCase }