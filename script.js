var tasksSelector = document.querySelectorAll('#taskForm, #taskInput'); 



// Seperate each Selector here

var taskList = document.querySelector('#taskList'); 


var filterBtn = document.querySelector('.filters__btn');

var emptyState = document.querySelector('#emptyState')
 

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

function isCompleted() {

}

function render() {

  // Clears #taskList
  taskList.innerHTML = ''


  if(tasks.length === 0) {
    taskList.appendChild(emptyState); 
    return

  }


  for(let i = 1; i < tasks.length; i++) {

   var listItem = document.createElement('li');

   var checkBox = document.createElement('input')

   var deleteBtn = document.createElement('button')

   // Adds checkbox class 
   checkBox.addEventListener('change', () => {
   tasks.completed = checkBox.checked;
  render();
});

    // List Item 
   
    listItem.className = 'item' 
    listItem.innerText = tasks[i].text; 


    // Checkbox
    checkBox.className = 'check'
    checkBox.type = 'checkbox'

    // Delete 
    deleteBtn.className = 'del'; 
    deleteBtn.type = 'button'
    deleteBtn.textContent = 'Delete'

    if (tasks.completed) {
    listItem.classList.add('is-completed');
    checkBox.checked = true;
  }


   // Appends 

   listItem.appendChild(checkBox); 

   listItem.appendChild(deleteBtn);



    taskList.appendChild(listItem);
    console.log(listItem); 

   
  }
}



// filterBtn.addEventListener('click', submitTask)

var submit = document.querySelector('#addBtn')

submit.addEventListener('click', submitTask)


var list = document.querySelector('.list') 






