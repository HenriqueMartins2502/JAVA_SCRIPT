"use strict"

const p = document.querySelectorAll("p");
console.log(p);

p.forEach((eLement, i) => {
    if(i == 0){
        eLement.style.background = 'blue'
    }
    if(i == 1){
        eLement.style.background = 'red'
    }
    console.log(i, eLement);
})
