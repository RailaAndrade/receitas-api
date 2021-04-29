import { inject, injectable } from "tsyringe"
import { hash } from "bcryptjs"


import { AppError } from "../../../../errors/AppError"
import { IReceitasRepository } from "../../repositories/IReceitasRepository"
import { ICreateReceitaDTO } from '../../dtos/ICreateReceitaDTO'
@injectable()
class DeleteReceitasUseCase {
    constructor(
        @inject("ReceitasRepository")
        private receitasRepository: IReceitasRepository
    ) { }
    async execute(id: number): Promise<void> {

        await this.receitasRepository.delete(id)


    }
}
export { DeleteReceitasUseCase }