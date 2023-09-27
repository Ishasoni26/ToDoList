const title = document.getElementById("title");
const button = document.getElementById("delete-btn");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container")

const tasks = [];

function showAllTasks() {
  tasks.forEach((value,index)=>{
    const div= document.createElement("div");
    div.setAttribute("class","task");

    const innerDiv = document.createElement("div");
    div.append(innerDiv);

    const p = document.createElement("p");
    p.innerText=title.value;
    innerDiv.append(p);

    const span = document.createElement("span");
    span.innerText=description.value;
    innerDiv.append(span);

    const btn = document.createElement("button")
    btn.setAttribute("id","delete-btn")
    btn.innerText="-";
  
    div.append(btn);
    container.append(div);


  })
} 


function removeTasks(){
  tasks.forEach(()=>{
    const div = document.querySelector(".div");
    div.remove();
  });
}


form.addEventListener("submit",(e)=>{
  e.preventDefault();

removeTasks();

  tasks.push({
    title: title.value,
    description:description.value,
  })
  // console.log(tasks);
  showAllTasks();
})