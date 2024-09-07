/**
Manipulação de Arrays de Objetos com forEach

7. Modificando Objetos em um Array
O Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.
 */

const object = [
  { name: "hat", price: 200, discount: 0.1 },
  { name: "shorts", price: 300, discount: 0.1 },
  { name: "shirt", price: 700, discount: 0.1 },
];

object.forEach(element => {
  let newPrice = element.price - (element.price * element.discount);
  console.log(newPrice);
});

/**
8. Criando Novos Arrays a Partir de Objetos

O Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.
 */

const films = [
    {title:'American Beauty', director:'Sam Mendes', releaseYear: 1999},
    {title:'\C\'est pas moi, je le jure!', director:'Philippe Falardeau', releaseYear: 2008},
    {title:'Pulp Fiction', director:'Quentin Tarantino', releaseYear: 1994},
    {title:'Forrest Gump', director:'Robert Zemeckis', releaseYear: 1994}

];

const newArray = [];

films.forEach((element,index) => {
  newArray[index] = element.title;  
})

console.log(newArray);


/**
9. Contabilizando Elementos com uma Condição

O Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.
 */

const client = [
    {name:'Gerson', age: 23, city:'Lauro De Freitas'},
    {name:'keyla', age: 29, city:'Salvador'},
    {name:'Eraldo', age: 47, city:'Camaçari'}
]
let olderAge = 0;

client.forEach(client =>{
    if(client.age > 30){
       olderAge++
    }
})

console.log(olderAge)