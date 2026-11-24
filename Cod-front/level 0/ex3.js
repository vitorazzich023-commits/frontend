const texto = "Este texto escrito"
let vogais = 0

for(let letra of texto){
    if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
        vogais++;
    }
    if(letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U'){
        vogais++;
    }

}

console.log(vogais)