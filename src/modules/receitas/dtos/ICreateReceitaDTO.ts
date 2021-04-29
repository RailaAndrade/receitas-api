interface ICreateReceitaDTO {
    nome: string;
    tempo_preparo_minutos: number;
    porcoes: number;
    modo_preparo: string;
    ingredientes: string
    id_usuarios: number;
    id_categorias: number
}

export { ICreateReceitaDTO }