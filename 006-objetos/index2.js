// Verificaçao de propriedade e valor dentro do objeto

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

console.log(Tenis.hasOwnProperty("teste"));
console.log(Tenis.hasOwnProperty("cardaco"));

if(Tenis.hasOwnProperty("teste")){
    console.log("Existe teste");
}else{
    console.log("Não existe teste");
}

console.log(tamanho in Tenis);
