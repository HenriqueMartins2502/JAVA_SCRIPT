let peso = 98;
let altura = 180;
let IMC = 0;

IMC = peso / ((altura / 100) * (altura / 100));
console.log(IMC);

if(IMC < 18.5){
    console.log("Abaixo do peso");
} else if(IMC >= 18.5 && IMC <= 24.9){
    console.log("Peso normal");
} else if(IMC >= 25 && IMC <= 29.9){
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}
