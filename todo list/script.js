var taskItem=[];
function addTodo(event){
    event.preventDefault();
    document.getElementById("res").innerHTML="";
    const task=document.getElementById("task").value
    taskItem.push(task);
    console.log(taskItem);
    taskItem.map((val,index)=>{
        document.getElementById("res").innerHTML+="<li>"+ val +"</li><button>Delete</button>";
    })
}
document.getElementById("task").value="";

document.getElementById("res").addEventListener('click',(e)=>{
    e.target.classList.add("strike")
})