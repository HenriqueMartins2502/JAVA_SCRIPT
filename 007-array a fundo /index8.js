// Foreach

const arrObj = [
    {
        nome: 'Henrique',
        sobrenome: 'Martins',
    },
    {
        nome: 'Pamela',
        sobrenome: 'Garcia',
    },
];

arrObj.forEach((item,i) => {
    if(item.nome == 'Pamela'){
        return console.log("sou princesa")
    }
    console.log(item,i);
});
