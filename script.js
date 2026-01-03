var tasksSelector = document.querySelectorAll('#taskForm, #taskInput, #taskList, #emptyState'); 

// Seperate each Selector here

var taskList = document.querySelector('#taskList'); 


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

// render 

render();
 
}

function render() {

   var listItem = document.createElement('li');

   var checkBox = document.createElement('input')


  for(let i = 1; i < tasks.length; i++) {

    // List Item 
   
    listItem.className = 'item' 
    listItem.innerText = tasks[i].text; 


    // Checkbox
    checkBox.className = 'check'
    checkBox.type = 'checkbox'

   // Appends 

   listItem.appendChild(checkBox); 

    taskList.appendChild(listItem);
    console.log(listItem); 

  }

}



// filterBtn.addEventListener('click', submitTask)

var submit = document.querySelector('#addBtn')

submit.addEventListener('click', submitTask)


var list = document.querySelector('.list') 






