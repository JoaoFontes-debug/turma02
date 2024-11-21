//FILTER - quando usar? - Sempre que quiser obter um novo array 
//com apenas alguns elementos que obedecem alguma condição.
//- Não modifica o array origianl

const randomNumbers = [36, 99, 37, 63]

const NumbersGreaterThan37 = randomNumbers.filter(item => item > 37);
console.log(NumbersGreaterThan37);

const tarantinoMovies = [
    {name:'Bastardos Inglórios', release: 2009},
    {name:'Pulp Fiction', release: 1994},
    {name:'Kill Bill: Volume 2', release: 2004},
    {name:'Quatro Quartos', release: 1995},
    {name:'Sin City', release: 2005},
    {name:'Era uma vez... Hollywood', release: 2019},
    {name:'Django Livre', release: 2012},
    {name:'Cães de Aluguel', release: 1992},
    {name:'À Prova da Morte', release: 2007},
    {name:'Kill Bill: Volume 1', release: 2003},
]

//se a condiçao for true retorna o elemento inteiro no caso o objeto
const moviesBefore2000 = tarantinoMovies.filter(({release}) => release > 2000);
console.table(moviesBefore2000)

//EX02:
const firstTravelerCities = [
    'Sydney',
    'Belim',
    'Lisboa',
    'Sófia',
    'Praga',
    'Bali',
    'Florianopolis'
]

const secondCities = ['Praga', 'Roma', 'Chiang Mai', 'Lisboa', 'Zagreb']

const commonCities = firstTravelerCities.filter(city => secondCities.includes(city));

console.log(commonCities);

//transformando objeto em array

const movies = tarantinoMovies.filter(movies => Object.entries(movies));
console.table(movies)