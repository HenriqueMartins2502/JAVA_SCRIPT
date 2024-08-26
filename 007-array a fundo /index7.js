const arr = [1,2,3,4,5,6,7,8,9,10];

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

const obj = [{nome: 'Henrique', sobrenome: 'Martins'},]

for(let i = 0; i < 10; i++){
    console.log(arr[i]);
}

//for of
for(let item of arrObj){
    console.log(item.nome)
};

//for in (Casos especificos)
for(let item in obj){
    console.log(obj(item));
};
