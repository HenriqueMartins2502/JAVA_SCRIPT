// Clonando objestos

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

let Nome = {
    name: "henri",
    idade: 18,
};

let clone1 = Nome;
console.log(clone1);

let mesclar = Object.assign(Tenis, Nome);
console.log(mesclar);
