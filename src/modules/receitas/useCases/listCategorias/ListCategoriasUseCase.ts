
import { inject, injectable } from "tsyringe";
import { Categoria } from "../../entities/Categoria";
import { ICategoriasRepository } from "../../repositories/ICategoriasRepository";



@injectable()
class ListCategoriasUseCase {

    constructor(
        @inject("CategoriasRepository")
        private categoriasRepository: ICategoriasRepository
    ) { }

    async execute(): Promise<Categoria[]> {

        const categoria = await this.categoriasRepository.listAll();
        return categoria
    }
}
export { ListCategoriasUseCase }