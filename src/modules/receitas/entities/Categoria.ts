import { v4 as uuidv4 } from 'uuid'
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { Receita } from './Receitas';

@Entity("categorias")
class Categoria {

    @PrimaryGeneratedColumn()
    id?: number;
    @Column()
    nome: string;


    @OneToMany(() => Receita, receita => receita.id_categorias)
    photos: Receita[];

}
export { Categoria }