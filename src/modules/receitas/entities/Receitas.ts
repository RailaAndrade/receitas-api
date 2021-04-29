import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Usuario } from "../../accounts/entities/usuarios";
import { Categoria } from "./Categoria";

@Entity("receitas")
class Receita {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: String;



    @Column()
    tempo_preparo_minutos: number;

    @Column()
    porcoes: number;

    @Column()
    modo_preparo: string;


    @Column()
    ingredientes: string;



    @Column()
    id_categorias: number;

    @ManyToOne(() => Categoria)
    @JoinColumn({ name: 'id_categorias' })
    categoria: Categoria;


    @Column()
    id_usuarios: number;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'id_usuarios' })
    usuario: Usuario;


    @CreateDateColumn()
    criado_em: Date;



    @BeforeInsert()
    updateDateCreation() {
        var Data = new Date();

        this.criado_em = Data
    }

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    alterado_em: Date;


}

export { Receita }

function Type(arg0: () => DateConstructor) {
    throw new Error("Function not implemented.");
}
