
//classe que cria o bjeto tarefas
class Task {
    //metodo construtor com parametros
    constructor (year, month, day, type, description){
        this.year = year;
        this.month =  month;
        this.day = day;
        this.type = type;
        this.description = description;
    
    }

    //valida os dados do objeto e não do input do usuario
    validateData(){
        for(let key in this ){
            if(this[key] === undefined || this[key] === ""){
                console.error(`O campo ${key} é obrigatório.`);
                //nao é valido
                return false;
            }       
        }
        //é valido
        return true;
    }

}


//esta classe faz o papel do back end, contem as operaçoes do crud e cria o banco de dados do zero
class Database {
    constructor(){
        //chama o metodo para inicializar o banco
        this.initDatabase()
    }

    initDatabase(){
        let id = localStorage.getItem('id');

        if(id === null){
            localStorage.setItem('id', '0');

        }
        
    }

    //transforma todas tasks em json e retorna um array com todas as tasks
    loadTasks(){
        let tasks = [];
        let id = localStorage.getItem('id');

        for(let i = 1; i <= id; i++){
            try {
                //pega as tasks do banco(storage pelo id(i) e transforma em json 
                let task = JSON.parse(localStorage.getItem(i));
                //adiciona cada tareafa ao array "tasks"
                tasks.push(task);
            } catch (error) {
                console.error(`Erro ao carregar tarefa com id ${id}`);

            }

        }
        //retorna o array tasks
        return tasks
    }

    createTask(task){
        //chama o metodo getNextid e atribui o retorno  a variavel id
        let id = this.getNextId();
        //cria um objeto chave/valor no localstorage. "id": "task(json)" 
        localStorage.setItem(id, JSON.stringify(task));
        //cria um objeto chave/valor no localstorage. "id": "id(json)" 
        localStorage.setItem('id', id.toString());
          
    }

    removeTask(id){
        localStorage.removeItem(id);
    }

    searchTasks(searchTask) {
        const tasks = this.loadTasks(); // Carregar todas as tarefas do banco
    
        // Filtrar tarefas que atendem a todos os campos preenchidos de searchTask
        const filteredTasks = tasks.filter(task => {
            for (let key in searchTask) {
                /*so entra no if se as duas condiçoes forem verdadeiras 
                 - Ou seja quando searchTask[key] nao for vazio (retorna true dentro do if) e searchTask[key] for diferente de task[key]
                 - EX: searchTask[key(mes = 10)]  && searchTask[key(mes = 10) !== task[key(mes = 1)]
                 - SO ENTRA NO IF SE NAO TIVER VALOR VAZIO E OS VALORES FOREM DIFERENTES
                */
                if (searchTask[key] && searchTask[key] !== task[key]) {
                    return false; // Se o valor do campo não bater, descarta a tarefa
                }
            }
            return true; // Se todos os campos preenchidos baterem, mantém a tare
            fa
        });
    
        console.log(filteredTasks); // Exibe as tarefas filtradas no console
        return filteredTasks; // Retorna as tarefas correspondentes
    }

        
    getNextId(){
        let currentId = localStorage.getItem('id');

        return parseInt(currentId) + 1;
    }


}

//objeto de database onde é gerenciado o crud
const database =  new Database();

console.log(database.searchTasks());

function registerTask(){
    let year = document.getElementById('year').value;
    let month = document.getElementById('month').value; 
    let day = document.getElementById('day').value; 
    let type = document.getElementById('type').value; 
    let description = document.getElementById('description').value; 

    //cria uma instancia de Task com os dados passados 
    let task = new Task(year, month, day, type, description);

    //se o metodo de validaçao retornar "true" 
    if(task.validateData()){
        //acessa a classe database e passa o objeto task com os dados do usuario
        database.createTask(task);
        alert('Tarefa criada com sucesso!');
        
    }else{
        alert('Preencha todos os campos!')
    }
}

//passa um parametro com valor padrao "tasks = database.loadTasks()" 
//recupera e exibe todas as tarefas na tela
function loadTasks(tasks = database.loadTasks()){
    let listTasks = document.getElementById('listTasks');
    listTasks.innerHTML = '';

    tasks.forEach(task => {
        let row = listTasks.insertRow();
        //coluna da data
        row.insertCell(0).innerHTML = `${task.day}/${task.month}/${task.year}`;
        //coluna do nome 
        row.insertCell(1).innerHTML = getTaskTypeName(task.type);
        //
        row.insertCell(2).innerHTML = task.description;

        let btn = document.createElement('button');
        //adiciona cor do bootstrap
        btn.className = 'btn btn-danger';
        //seta o id do elemento igual o id da task
        btn.id = task.id;
        //seta o nome do botão
        btn.innerHTML = 'Deletar';

        btn.onclick = () => {
            //"confirm" é uma função nativa do js
            if(confirm('Você tem certeza que deseja deletar esta tarefa?')){
                //chama o metodo removeTask do bd e passa o id da tarefa a ser excluida
                database.removeTask(task.id);
                //chama a propria função
                loadTasks()
            }
        }


    })


}

function getTaskTypeName (type){
    switch(type){
        case '1':
            return 'Studies'
            break
        case '2':
            return 'Work'
            break
        case '3': 
            return 'Home'
            break
        case '4':
            return 'Health'
            break
        case '5':
            return 'Family'
            break
        case '6':
            return 'Heart'
            break
        default:
            return 'Desconhecido' 

    }
}

function searchTasks(){
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;
    const type = document.getElementById('type').value;
    const description = document.getElementById('description').value;

    const task = new Task(year, month, day, type, description);
    const tasks = database.searchTasks(task);
    console.log(database.loadTasks())
    loadTasks(tasks); // Carrega as tarefas filtradas
}

document.addEventListener('DOMContentLoaded', () =>{
    if(document.body.contains(document.getElementById('listTasks'))){
        loadTasks();

    }
})