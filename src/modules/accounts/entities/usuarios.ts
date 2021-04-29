import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Receita } from "../../receitas/entities/Receitas";

@Entity("usuarios")
class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    login: string;

    @Column()
    senha: string;
    @CreateDateColumn({ type: 'timestamp', precision: null, default: () => 'CURRENT_TIMESTAMP' })
    criado_em: Date;

    @UpdateDateColumn()
    alterado_em: Date


}

export { Usuario }