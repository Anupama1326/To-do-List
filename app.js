function displayTime(){
    const d = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let dt = d.getDate();
    let mon = months[d.getMonth()];
    let year = d.getFullYear();
    
    let datespan = dt+"<sup>th</sup> "+mon+" "+year;
    document.getElementById('date').innerHTML = datespan;
}
setInterval(displayTime,1000)

// document.querySelector('#plus').addEventListener("click",function(){
//     let addedtext = document.getElementById('taskinput').value;
//     document.getElementById('tasks').innerHTML += 
//     `<span class="taskp">
//         <div class="taskpdiv">

//         </div>
//         ${addedtext}
//     </span>`
//     var curtasks = document.querySelectorAll('.taskp');
//     for(var i=0; i<curtasks.length;i++)
//     {   
//         curtasks[i].addEventListener("click", function(){
//             curtasks[i].childNodes[0].style.textDecoration = "line-through";
//             curtasks[i].childNodes[1].stylr.backgroundColor = "red"
//         }) 
        
        
//     }

// })


    let taskList = document.getElementById("tasks");
    let addButton = document.getElementById("plus");
    let taskInput = document.getElementById("taskinput");

    // -------------adding tasks-----------
    addButton.addEventListener("click", function() {
        let newTask = document.createElement("span");
        newTask.className = "task";
        
        let checkbox = document.createElement("div");
        checkbox.className = "checkbox";
        newTask.appendChild(checkbox);

        let text = document.createElement("a");
        text.className = "text";
        text.href = "#";
        text.innerHTML = taskInput.value;
        newTask.appendChild(text);
        
        
        
        let del = document.createElement("img");
        del.className = "delimg";
        del.alt = "delete task";
        del.title = "delete task";
        del.src="download.png";
        newTask.appendChild(del);

        if(taskInput.value != "")
        {
            taskList.appendChild(newTask);
        }
        

// --------------alerting if tasks exceeds 8 in number-----------
        if(taskList.childElementCount > 8)
        {
            alert("Writing too many tasks is not advisable!!");
            newTask.parentNode.removeChild(newTask);
        }
        
// ------------checkbox striking-----------------------
        checkbox.addEventListener("click", function() {
          checkbox.classList.toggle("checked");
          text.classList.toggle("strikethrough");
          
        });
// -------------deleting tasks and updating count-----------
        del.addEventListener("click",function(){
            newTask.parentNode.removeChild(newTask);
            this.childElementCount--;
            let nooftasks = taskList.childElementCount;
            document.getElementById("nooftasks").innerText = "Tasks: "+nooftasks;
        })


        // ------------no of tasks --------------------------------
        let nooftasks = taskList.childElementCount;
        document.getElementById("nooftasks").innerText = "Tasks: "+nooftasks;
        
        // ------------Clearing task input after add task------------
        taskInput.value = "";
        taskInput.focus();
    });

    