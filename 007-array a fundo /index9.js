// Filter ,find e every

const pedidos = [
    {
        id: 87,
        nome: 'Henrique',
        pedido: 'Lanche de frango',
        bebida: 'Suco',
        preco: 780,
    },
    {
        id: 88,
        nome: 'Pamela',
        pedido: 'Lanche de carne',
        bebida: 'Refrigerante',
        preco: 89,
    }
];

const filterrefri = pedidos.filter((eLement, i ) => {
    return eLement.bebida == 'Refrigerante';
})

// O find é a mesma estrutura mas pega apenas um elemento o filter pega TODOS conforme o que lhe foi pedido
// Every é a mesma estruturaporem retorna true or false se vc procurar por cha por exemplo ele retornaria false

console.log(filterrefri);
