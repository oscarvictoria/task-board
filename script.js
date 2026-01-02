var tasksSelector = document.querySelectorAll('#taskForm, #taskInput, #taskList, #emptyState'); 
 

var filterBtn = document.querySelector('.filters__btn');

//Input

var taskInput = document.querySelector('#taskInput'); 

// Array of tasks 

var tasks = ['']; 

// Append to array of tasks 




// console.log(filterBtn); 

function sayPrint(e) {
    e.preventDefault()
    console.log('Submit clicked')
    tasks.push(taskInput.value); 
    console.log(tasks)
    // console.log(taskInput.value)
    
}



// filterBtn.addEventListener('click', sayPrint)

var submit = document.querySelector('#addBtn')

submit.addEventListener('click', sayPrint)


var list = document.querySelector('.list') 

list.innerHTML += `
 <ul class="list" id="taskList" aria-label="Tasks">
        <li class="empty" id="emptyState">Test.</li>
      </ul>
 ,
`




