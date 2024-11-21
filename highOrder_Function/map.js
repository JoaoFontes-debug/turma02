//MAP - Obtem um novo array com a mesma quantidade de elementos, porém modificados.

const numbers = [1, 2, 3];

//- Pode receber 3 argumentos EX: numbers.map((item, index, arrayCompleto) => {}). 
//- Apenas o item é obrigatório.
//- A funçao dentro do map vai ser executada para item do array.
const squareNumbers = numbers.map(item => item ** 2);

console.log(squareNumbers);

const tvShows = [
    {name:'Breaking Bad', releaseYear: 2008},
    {name:'Mr. Robot', releaseYear: 2015},
    {name:'True Detective', releaseYear: 2014},
    {name:'Hannibal', releaseYear: 2013},
    {name:'The Handmaid\'s Tale', releaseYear: 2017},
    {name:'Watchmen', releaseYear: 2019}

]

const namesTvShow = tvShows.map(shows => shows.name) 
console.log(namesTvShow);

//com destructuring
const namesShows = tvShows.map(({name}) => name)
console.table(namesShows)