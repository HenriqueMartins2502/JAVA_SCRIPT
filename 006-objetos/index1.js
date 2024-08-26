// Propriedades,metodos e valores curtos

function Tenis(tamanho,estoque,preco){
    return{
        tamanho,
        estoque,
        preco,
    }
};

console.log(Tenis(42, true, '50 reais'));


const Tenis2 = {
    getTamanho(){
        return 42;
    },
};

console.log(Tenis2.getTamanho());
