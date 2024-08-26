// Reduce

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

const resultados = pedidos.reduce((total, eLement) => {
    return total + eLement.preco;
}, 0);

console.log(resultados);
