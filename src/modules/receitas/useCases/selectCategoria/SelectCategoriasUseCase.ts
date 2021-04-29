
import { inject, injectable } from "tsyringe";
import { Categoria } from "../../entities/Categoria";
import { ICategoriasRepository } from "../../repositories/ICategoriasRepository";



@injectable()
class SelectCategoriasUseCase {

    constructor(
        @inject("CategoriasRepository")
        private categoriasRepository: ICategoriasRepository
    ) { }

    async execute(id: number): Promise<Categoria> {

        const categoria = await this.categoriasRepository.list(id);
        return categoria
    }
}
export { SelectCategoriasUseCase }