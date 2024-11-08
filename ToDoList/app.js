// OBS: Este código não é procedural


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
        this.initDatabase()
    }

    initDatabase(){


        if(id === null){
            localStorage.setItem('id', '0');

        }
        
        let id = localStorage.getItem('id');
    }


    loadTRasks(){}

    createTask(task){
        //chama o metodo getNextid e atribui o retorno  a variavel id
        let id = this.getNextId();
        //cria um objeto chave/valor no localstorage. "id": "task(json)" 
        localStorage.setItem(id, JSON.stringify(task));
        //cria um objeto chave/valor no localstorage. "id": "id(json)" 
        localStorage.setItem('id', id.toString());
          
    }

    removeTask(id){}

    searchTasks(Task){}

    getNextId(){
        let currentId = localStorage.getItem('id');

        return parseInt(currentId) + 1;
    }
}



//objeto de database onde é gerenciado o crud
const database =  new Database();


function registerTask(){
    let year = document.getElementById('year').value;
    let month = document.getElementById('month').value; 
    let day = document.getElementById('day').value; 
    let type = document.getElementById('type').value; 
    let description = document.getElementById('description').value; 

    //cria uma instancia de Task com os dados passados 
    let task = new Task(year, month, day, type, description);

    //se retornar "true"
    if(task.validateData()){
        //acessa a classe database e passa o objeto task com os dados do usuario
        database.createTask(task);
        alert('Tarefa criada com sucesso!');
        
    }else{
        alert('Preencha todos os campos!')
    }
}