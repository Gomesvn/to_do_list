//funções
/*
Adicionar tarefa
remover tarefa
marcar como concluida
*/
//Eventos 
//click
//mouseeover
//focus

/*Variáveis
 * template
 * newTask
 * taskList
*/

//Métodos -> textContent, cloneNode(true), parentNode.remove(true), classList

function addTask(){
    const taskTitle = document.querySelector('#add-task-title').value;

    if(taskTitle){
        const template = document.querySelector('.template')
        
        const newTask = template.cloneNode(true)
        newTask.querySelector('.task-title').textContent = taskTitle;
        const taskList = document.querySelector('#task-list');
        taskList.appendChild(newTask);
        
        newTask.classList.remove('hide')
        newTask.classList.remove('template')
        
        const removeBtn = newTask.querySelector('.fa-xmark').addEventListener("click", function(){
            const iconContainer = newTask.querySelector('#icons-container')
            removeTask(iconContainer);
        })
        const concluseBtn = newTask.querySelector('.fa-check').addEventListener("click", function(){
            const iconContainer = newTask.querySelector('#icons-container')
            concluseTask(iconContainer);
        })
    }

    document.querySelector('#add-task-title').focus()
    document.querySelector('#add-task-title').value = '';

}

function removeTask(task){
    task.parentNode.remove(true);
}

function concluseTask(task) {
    task.parentNode.classList.toggle("done")
}

const btn = document.querySelector('#add-task-btn')
btn.addEventListener('click',  function (e){
    e.preventDefault();
    addTask();
})

btn.addEventListener('keydown', function(e){
    if(e.key === "Enter"){
        addTask();
    }
})




