/**
Manipulação de Arrays de Objetos com for of

4. Iterando Sobre Arrays de Objetos
O Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console. 
 */

const people = [
  { name: "JimHalpert", age: 25, city: "Scranton" },
  { name: "PamBeesly", age: 25, city: "Scranton" },
  { name: "DwightSchrute", age: 35, city: "Scranton" },
];

for (const OnePeople of people) {
  for (Prop in OnePeople) {
    console.table(OnePeople[Prop]);
  }
}

/**
 5. Calculando Valores em Arrays de Objetos

O Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.

 */
const students = [
  { name: "emerald", score1: 7, score2: 8 },
  { name: "begween", score1: 7, score2: 8 },
  { name: "loca", score1: 7, score2: 8 },
  { name: "goia", score1: 7, score2: 8 },
];

for (const student of students) {
  console.log(
    "the average of student ",
    student.name,
    " is ",
    (student.average = (student.score1 + student.score2) / 2)
  );
}

/*
6. Filtrando Arrays de Objetos
O Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.

 */

const employees = [
  { name: "emerald", position: "electrician", salary: 4000 },
  { name: "begween", position: "teacher", salary: 3800 },
  { name: "loca", position: "software developer", salary: 5800 },
  { name: "goia", position: "anything", salary: 1400 },
];

function baseSalary(base, employees) {
  for (const employee of employees) {
    if (employee.salary > base) {
      console.log(employee.salary);
    }
  }
}

baseSalary(2000, employees);

/* 
    link sobre ojetos js: https://ricardo-reis.medium.com/objetos-javascript-e347adc3a8ac

 OBS: operador "IN" verificar se existe

 EX: let pessoas = {
    firstName: "peter",
    lastName: "crash",
    loop: 3
 };

 console.log(firstName in pessoas); = true
 console.log(Name in pessoas);  = false

 */
