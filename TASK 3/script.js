function currentTime(){
  return new Date().toLocaleString();
}

function addTask(){
  let taskInput=document.getElementById("taskInput");
  if(taskInput.value.trim()===""){alert("Enter something!");return;}

  createTask(taskInput.value,"pending", "Added: "+ currentTime());
  taskInput.value="";
  updateProgress();
}

function createTask(text,type,time){
  let li=document.createElement("li");

  li.innerHTML=`
    <b>${text}</b>
    <span class="time">${time}</span>

    <div class="actions">
      ${type=="pending" ?
      `<button class="done" onclick="completeTask(this)">Done</button>` :
      `<button class="undo" onclick="undoTask(this)">Undo</button>`
      }
      <button class="edit" onclick="editTask(this)">Edit</button>
      <button class="delete" onclick="deleteTask(this)">Delete</button>
    </div>
  `;

  if(type=="pending") document.getElementById("pending").appendChild(li);
  else document.getElementById("completed").appendChild(li);
}

function completeTask(btn){
  let t = btn.parentElement.parentElement;
  t.querySelector(".time").innerText="Completed: "+ currentTime();
  createTask(t.querySelector("b").innerText,"completed",t.querySelector(".time").innerText);
  t.remove();
  updateProgress();
}

function undoTask(btn){
  let t = btn.parentElement.parentElement;
  t.querySelector(".time").innerText="Moved Back: "+ currentTime();
  createTask(t.querySelector("b").innerText,"pending",t.querySelector(".time").innerText);
  t.remove();
  updateProgress();
}

function deleteTask(btn){
  btn.parentElement.parentElement.remove();
  updateProgress();
}

function editTask(btn){
  let task=btn.parentElement.parentElement;
  let newText=prompt("Edit Task:", task.querySelector("b").innerText);
  if(newText){task.querySelector("b").innerText=newText;}
}

function updateProgress(){
  let pending=document.getElementById("pending").children.length;
  let completed=document.getElementById("completed").children.length;

  let total=pending+completed;
  let percent = total===0 ? 0 : Math.round((completed/total)*100);

  document.getElementById("bar").style.width=percent+"%";
  document.getElementById("progressText").innerText = percent+"% Completed";
}
