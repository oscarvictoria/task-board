var tasksSelector = document.querySelectorAll('#taskForm, #taskInput, #taskList, #emptyState'); 
 

var filterBtn = document.querySelector('.filters__btn');
 

// Array of tasks 

var tasks = ['']; 


function sayPrint(e) {
    e.preventDefault()
    console.log('Submit clicked')
    tasks.push(tasksSelector[1].value); 
    console.log(tasksSelector[1].value)
    console.log(tasks);
   
    
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




