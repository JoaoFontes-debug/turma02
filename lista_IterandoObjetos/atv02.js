/*
1. Acessando Propriedades de Objetos

O Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.

*/

const carro = {
  marca: "Nissan",
  modelo: "Versa",
  ano: 2020,
  cor: "preto",
};

//O "X" representa o indice dos objetos
for (const x in carro) {
  //console.log(carro)
  console.log(carro[x]);
}

/*
2. Verificando Propriedades 

O Objetivo: Crie um objeto livro com propriedades 
titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

 */

const livro = {
  titulo: "A utilidade do Inútil",
  autor: "Nuccio Ordine",
  anoPublicacao: "04/02/2016",
  genero: "Ensaio",
};

for (const x in livro) {
  if (x === "editora") {
    console.log("tem editora");
  } else {
    livro.editora = "";
    console.log(livro);
    break;
  }
}

/*
3. Filtrando Propriedades de Objetos

O Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades.
 
*/

const product = {
  name: "Watermelon",
  price: 45.2,
  weight: 20,
  supplier: "lofifruits",
  expiration: 80,
};

const returnGreaterProp = (product, value) => {
  let newObject = {};

  for (let prop in product) {
    if (product[prop] > value) {
      newObject[prop] = product[prop];
    }
  }
  return newObject;
};

console.log(returnGreaterProp(product, 38));

/*
o laço for…in vai percorrer as propriedades do objeto que foram
enumeradas com base na ordem de inserção, e não os valores das 
propriedades, se temos um array com três números dentro, as propriedades 
vão ser os índices de cada posição começando por zero, por isso os números
retornados pelo console.log são 0, 1 e 2, pois são as propriedades que
correspondem ao índice de cada posição do array.

let forIn_Teste_Array = [2, 3, 4]

for (let x in forIn_Teste_Array) {
    console.log(x)
   
}

*/

/*__for...in não deve ser usado para iteração em uma Array onde
 a ordem é importante, visto que ele iterage em uma ordem arbitrária.
 
 __É recomendável utilizar o laço for com índices numéricos ou 
 Array.prototype.forEach() ou ainda for...of quando iteragir sobre 
 arrays onde a ordem é importante.
 */
