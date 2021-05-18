// UI Variables

const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('#lists');
const clearBtn = document.querySelector('#clear-tasks');

// Load event listeners
loadEventListeners();

function loadEventListeners() {
    // Add task event
        form.addEventListener('submit', addTask)

    // Remove task event
    taskList.addEventListener('click',removeTask);

    //clear task list
    clearBtn.addEventListener('click',clearTasks);

    
}


// Add Task
function addTask(e){
    if( taskInput.value === ''){
        alert("Add Task");
    }
    else{
            //creating li element
    const li = document.createElement('li');

    //Add classes
    li.classList.add('border','py-2','px-4','w-72','flex','flex-row','justify-between','my-2','text-2xl','font-normal','sm:w-96','lists');

    // create text and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // create delete link element
    const deleteLink = document.createElement('a');

    //Add classes
    deleteLink.classList.add('bg-red-500','hover:bg-red-700','text-white','border','clear-tasks','cursor-pointer');

    //Add icon for deleteLink
    deleteLink.innerHTML = '<i class="ri-close-line"></i>'

    //append deleteLink to li
    li.appendChild(deleteLink);

    //append li to ul
    taskList.appendChild(li);

    //clear input field
    taskInput.value = '';
    
    }

    e.preventDefault();
    
}

//Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('clear-tasks')){
        if(confirm("Are you sure ?")){
            e.target.parentElement.parentElement.remove();
        }
    }
}

//Clear Tasks
function clearTasks(e){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
}

