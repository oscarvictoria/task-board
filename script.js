var tasksSelector = document.querySelectorAll('#taskForm, #taskInput, #taskList, #emptyState'); 
 

var filterBtn = document.querySelector('.filters__btn');

console.log(filterBtn); 

function sayPrint(e) {
    e.preventDefault()
    console.log('Submit clicked')
    
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

var tasks = ['Hello']; 