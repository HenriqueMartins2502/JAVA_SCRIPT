// Removendoe elementos

let arr = [1,2,3,4,5];
console.log(arr.shift()); //Remove o perimeiro valor
console.log(arr.pop()); //Remove o ultimo valor 

let arr1 = [
    {nome: 'Henrique', tel: '(19)9999-9999'},
    {nome: 'Pamela', tel: '(19)9999-9999'},
    {nome: 'Dani', tel: '(19)9999-9999'},
    {nome: 'Her', tel: '(19)9999-9999'},
];
console.table(arr1);

const newArray = arr1.slice(0,2); // copia os dados apemas mas não remove
//  arr.splice(0,2) remove 
console.table(newArray);
