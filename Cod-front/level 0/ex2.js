const array = [2, 1, 5, 10, 20, 34, 12, 10, 50]

let maior = -1;

for(i=0; i<array.length; i++){
    if(array[i] > maior){
        maior = array[i];
    }
}

console.log(maior)