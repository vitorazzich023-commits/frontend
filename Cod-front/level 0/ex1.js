const notas = [7, 12, 10, 20];

let soma = 0;
for(let i=0; i<notas.length; i++){
    soma = soma + notas[i];
}

let media = soma/notas.length;

console.log(media);