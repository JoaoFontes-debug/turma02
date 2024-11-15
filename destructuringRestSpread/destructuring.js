//destructuring


const pessoa = {
    nome: 'alyssa',
    sobrenome: 'gonçalves',
    lunks: {
        instagra:'http',
        linkedin: 'perfil'
    }
}

//nao cria novas variaveis, a desestruturação disponibiliza as variaveis do objeto fora dele
const {nome, sobrenome} = pessoa

console.log(nome, sobrenome);


//- SPREAD OPERATOR 
//- Espalha arrays ou objetos em algum lugar
//- Mais utilizado em funções

let numeros = [1,2,3];
let novosNumeros = [...numeros, 4,5, 6]

console.log(novosNumeros);

let pessoa01 = {
    nome:'glenda',
    idade: 30
}

let updatePessoa01 = {...pessoa01, cidade:'santos'}

console.log(updatePessoa01);



//Spread em funçao
let num  = [1,2,3];

function soma(...num){
    //REDUCE - pode receber alguns argumentos.
    //- Reduz um array a um tipo diferente, como , um numero (number)
    return numeros.reduce((total, numero) => {
        return total + numero
    }, 0);

}

console.log(soma())

//REDUCE
/**
 formato:
    - item
    - item
    - item
 */
const cart = [
    {name: 'Dark souls III', price: 95.03},
    {name: 'shadow of the tomb raider', price: 101.19},
    {name:'sekiro: shadows die twice', price: 179.99},
    {name: 'redent evil 2', price: 119.9}
]

const productList = cart.reduce((accumulator, {name}) => `${accumulator} - ${name}\n`, '');

console.log(productList);

//REST Operator
let num02 = [1,2,3];

function soma(...num02){
    return num02.reduce((total, num) => total + num, 0)

}

console.log("SOMA " , soma(1,2,3,4,5));

// EX - 02:
const [primeiro, segundo,...resto] = [1,2,3,4,5];

console.log(primeiro);
console.log(segundo);
console.log(resto);

//EX - 03
const jogador = {
    namePlayer:'Kanemann',
    age:30,
    team:'Maior do Sul'
}

const {namePlayer, ...outrasInfo} = jogador;

console.log(namePlayer);
console.log(outrasInfo);