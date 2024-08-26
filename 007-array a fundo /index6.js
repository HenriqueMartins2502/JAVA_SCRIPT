// Ordenar e reverter valores

const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
console.log(arr.sort());
console.log(arr.reverse()); 
//isso funciona apenas para strings

const numberarr = [1,2,3,4,5,6,7,8,9,10];
console.log(numberarr.sort((a, b) => a - b));
//Isso funciona apenas para numeros 
