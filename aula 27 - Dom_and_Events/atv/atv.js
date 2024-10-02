function getInputData(){
    let task = document.getElementById('input').value;
    let description = document.getElementById('area').value;

    return  {task, description};
}

const btn_Register = document.getElementById('btn_register');
let content = document.getElementById('contentTasks');
const tasks = [];


btn_Register.addEventListener('click', () => {
    const data = getInputData();
    tasks.push(data);
    document.getElementById('input').value = '';
    document.getElementById('area').value = '';

})

const btn_list =  document.getElementById('list_Tasks');


btn_list.addEventListener('click', () => {
    content.innerHTML = '';

    tasks.forEach(task =>{
        let newTask = document.createElement('p');
        newTask.innerHTML = 'Task: '+ task.task + ' -- ' + 'Description: '+ task.description;
        newTask.style.color = '#f1f1f1'
        content.appendChild(newTask);
    })
    
})


const btn_remove =  document.getElementById('list_Remove')

btn_remove.addEventListener('click', () => {
    tasks.pop()
    content.innerHTML = '';
    tasks.forEach(task =>{
        let newTask = document.createElement('p');
        newTask.innerHTML = 'Task:'+ task.task + 'Description:'+ task.description;
        newTask.style.color = '#f1f1f1'
        content.appendChild(newTask);
    })

})