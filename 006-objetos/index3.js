// Deletanto itens do objeto

let Tenis = {
    tipo: "Tenis de corrida",
    cardaco: "G",
    estoque: true,
    tamanho: {
        palmilha: 45,
        tenis: 42,
        caixa: {
            tamanho: 56,
            altura: 78,
            profundidade: 888,
        },
    },
    marca:["nike", "adidas", "puma", "new balance"],
};


delete Tenis.tipo;
console.log(Tenis)
