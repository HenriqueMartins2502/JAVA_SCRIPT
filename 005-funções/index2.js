// Funções construtoras

/* function Name(name) {
    this.name = name;
}

const henri = new Name("Henri Martins");
console.log(henri); */

function Calculadora(num1, num2){
    this.soma = () => {
        return `${num1 + num2}`
    }


    this.subtracao = () => {
        return `${num1 - num2}`
    }
} 

const calc = new Calculadora(10,5);
console.log(calc.soma());
console.log(calc.subtracao());
