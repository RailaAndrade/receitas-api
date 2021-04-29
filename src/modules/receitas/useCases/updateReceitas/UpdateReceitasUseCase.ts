import { inject, injectable } from "tsyringe"
import { hash } from "bcryptjs"


import { AppError } from "../../../../errors/AppError"
import { IReceitasRepository } from "../../repositories/IReceitasRepository"
import { ICreateReceitaDTO } from "../../dtos/ICreateReceitaDTO"
@injectable()
class UpdateReceitasUseCase {
    constructor(
        @inject("ReceitasRepository")
        private receitasRepository: IReceitasRepository
    ) { }
    async execute(id: number, { nome, ingredientes, modo_preparo, porcoes, tempo_preparo_minutos, id_usuarios, id_categorias }: ICreateReceitaDTO): Promise<void> {

        await this.receitasRepository.update(id, {
            nome, ingredientes, modo_preparo, porcoes, tempo_preparo_minutos, id_usuarios, id_categorias
        })

    }
}
export { UpdateReceitasUseCase }