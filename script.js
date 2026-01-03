var tasksSelector = document.querySelectorAll('#taskForm, #taskInput, #taskList, #emptyState'); 

// Seperate each Selector here


var filterBtn = document.querySelector('.filters__btn');
 

// Array of tasks 

var tasks = ['']; 


function submitTask(e) {
    e.preventDefault()

// Create an Object of task here 
const newTask = {
  id: tasksSelector[1].id,
  text: tasksSelector[1].value,
  completed: false
};

// Add the Object to the array

tasks.push(newTask); 


// print tasks to console
console.log(tasks)

// Clearn input 
tasksSelector[1].value = ''
 
}



// filterBtn.addEventListener('click', submitTask)

var submit = document.querySelector('#addBtn')

submit.addEventListener('click', submitTask)


var list = document.querySelector('.list') 

list.innerHTML += `
 <ul class="list" id="taskList" aria-label="Tasks">
        <li class="empty" id="emptyState">Test.</li>
      </ul>
 ,
`




