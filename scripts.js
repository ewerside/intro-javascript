// Exemplos de var
var nome = "João"; 
console.log(nome);      
var nome = "Maria";    
console.log(nome);    
    
// Exemplos de let
let idade = 30;          
console.log(idade);     
idade = 31;              
console.log(idade);      
// let idade = 32;       // erro

// Exemplos de const
const pi = 3.14159;      
console.log(pi);        
// pi = 3.14;            // erro
// const pi = 3.14;      // erro



// Criando um array
let frutas = ["maçã", "banana", "cereja"];
console.log(frutas);                  

// Tamanho do array
console.log(frutas.length);           

// Recuperação de elemento
console.log(frutas[1]);               

// Inclusão de elemento
frutas[3] = "manga";                  
console.log(frutas);         

// Push - adiciona ao final
frutas.push("laranja");
console.log(frutas);                  

// Pop - remove do final
let frutaRemovida = frutas.pop();
console.log(frutaRemovida);           
console.log(frutas);                  

// Shift - remove do começo
frutaRemovida = frutas.shift();
console.log(frutaRemovida);           
console.log(frutas);                  

// Unshift - adiciona ao começo
frutas.unshift("kiwi");
console.log(frutas);                

